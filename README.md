# Sharath D XR Portfolio

Immersive 3D portfolio for an XR / Unity Developer, built with React, TypeScript, Vite, React Three Fiber, Drei, Framer Motion, and TailwindCSS.

## Run Locally

```bash
npm install
npm run dev
```

In this local workspace, Node was not on PATH, so I used a portable Node runtime under `.tools`.
That folder is intentionally not committed. If it exists locally, PowerShell can run:

```bat
.\scripts\portable-npm.cmd run dev
```

## Project Shape

- Resume content lives in `src/data`.
- Page sections live in `src/components/sections`.
- Reusable UI primitives live in `src/components/ui`.
- Three.js / R3F scene logic lives in `src/scene`.
- Future character work starts in `src/components/Character/CharacterPlaceholder.tsx`.

## Add A Project

Edit `src/data/projects.ts` and add a new project object. The Work section renders project cards automatically, including optional demo video support.

## Add A Demo Video

Place a video in `public/videos` or `src/assets/videos`, then set `demoVideo` on the matching project.

## Visual Check

```bash
npm run visual:check
```

This uses Playwright Core with the installed Chrome or Edge browser to capture desktop/mobile screenshots and verify the WebGL canvas is rendering.
