import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright-core";

const url = process.env.PORTFOLIO_URL ?? "http://127.0.0.1:5173";
const outputDir = path.resolve(".codex", "visual");

const chromeCandidates = [
  process.env.PLAYWRIGHT_CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
].filter(Boolean);

const executablePath = chromeCandidates.find((candidate) => fs.existsSync(candidate));

if (!executablePath) {
  throw new Error("No Chrome or Edge executable found. Set PLAYWRIGHT_CHROME_PATH to run visual checks.");
}

fs.mkdirSync(outputDir, { recursive: true });

const viewports = [
  { name: "desktop", width: 1440, height: 1100, isMobile: false },
  { name: "mobile", width: 390, height: 844, isMobile: true },
];

const requiredSections = ["landing", "about", "work", "tech", "career", "contact"];

function assertCanvasStats(stats, name) {
  if (!stats.hasContext) {
    throw new Error(`${name}: WebGL context was not available.`);
  }

  if (stats.width < 300 || stats.height < 300) {
    throw new Error(`${name}: canvas was too small (${stats.width}x${stats.height}).`);
  }

  if (stats.brightSamples < 8 || stats.colorVariation < 6) {
    throw new Error(
      `${name}: canvas looked blank. Bright samples: ${stats.brightSamples}, variation: ${stats.colorVariation}.`,
    );
  }
}

const browser = await chromium.launch({
  executablePath,
  headless: true,
  args: ["--disable-dev-shm-usage"],
});

try {
  for (const viewport of viewports) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      isMobile: viewport.isMobile,
      deviceScaleFactor: viewport.isMobile ? 2 : 1,
    });

    const page = await context.newPage();
    await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForSelector("canvas", { timeout: 20000 });
    await page.waitForTimeout(1600);

    const stats = await page.locator("canvas").evaluate(async (canvas) => {
      await new Promise((resolve) => requestAnimationFrame(resolve));

      const gl = canvas.getContext("webgl2") ?? canvas.getContext("webgl");

      if (!gl) {
        return { hasContext: false, width: canvas.width, height: canvas.height };
      }

      const width = canvas.width;
      const height = canvas.height;
      const pixels = new Uint8Array(width * height * 4);
      gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

      let brightSamples = 0;
      const buckets = new Set();
      const stride = Math.max(4, Math.floor((width * height) / 1500) * 4);

      for (let index = 0; index < pixels.length; index += stride) {
        const r = pixels[index];
        const g = pixels[index + 1];
        const b = pixels[index + 2];
        const max = Math.max(r, g, b);

        if (max > 24) {
          brightSamples += 1;
        }

        buckets.add(`${Math.floor(r / 16)}-${Math.floor(g / 16)}-${Math.floor(b / 16)}`);
      }

      return {
        hasContext: true,
        width,
        height,
        brightSamples,
        colorVariation: buckets.size,
      };
    });

    assertCanvasStats(stats, viewport.name);

    const heroScreenshotPath = path.join(outputDir, `${viewport.name}-hero.png`);
    await page.screenshot({ path: heroScreenshotPath, fullPage: false });

    for (const sectionId of requiredSections) {
      await page.evaluate((id) => {
        document.documentElement.style.scrollBehavior = "auto";
        document.getElementById(id)?.scrollIntoView({ block: "start", behavior: "auto" });
      }, sectionId);
      await page.waitForTimeout(900);

      const heading = page.locator(`#${sectionId} h1, #${sectionId} h2`).first();
      const visible = await heading.isVisible();
      const box = await heading.boundingBox();

      if (!visible || !box || box.width < 120 || box.y < 0 || box.y > viewport.height) {
        throw new Error(`${viewport.name}: ${sectionId} heading was not visible after scrolling.`);
      }
    }

    await page.evaluate(() => {
      document.getElementById("work")?.scrollIntoView({ block: "start", behavior: "auto" });
    });
    await page.waitForTimeout(600);
    const workScreenshotPath = path.join(outputDir, `${viewport.name}-work.png`);
    await page.screenshot({ path: workScreenshotPath, fullPage: false });

    await context.close();

    console.log(
      `${viewport.name}: canvas ${stats.width}x${stats.height}, screenshots ${heroScreenshotPath}, ${workScreenshotPath}`,
    );
  }
} finally {
  await browser.close();
}
