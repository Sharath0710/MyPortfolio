import { Box, Cpu, Home, Mail, PanelsTopLeft, UserRound, Workflow } from "lucide-react";
import type { SectionId, NavItem } from "../../data/portfolio";
import { focusRing } from "../styles/tokens";

type NavbarProps = {
  items: NavItem[];
  activeSection: SectionId;
};

const navIcons: Record<SectionId, typeof Home> = {
  landing: Home,
  about: UserRound,
  work: PanelsTopLeft,
  tech: Cpu,
  career: Workflow,
  contact: Mail,
};

export function Navbar({ items, activeSection }: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-lg border border-white/10 bg-deep/72 px-3 py-3 shadow-holo backdrop-blur-xl">
        <a
          href="#landing"
          className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-white ${focusRing}`}
        >
          <Box className="h-4 w-4 text-cyanSignal" aria-hidden="true" />
          <span className="hidden sm:inline">Sharath D</span>
          <span className="sm:hidden">SD</span>
        </a>

        <div className="flex max-w-[70vw] items-center gap-1 overflow-x-auto">
          {items.map((item) => {
            const Icon = navIcons[item.id];
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`inline-flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-sm transition ${focusRing} ${
                  isActive
                    ? "bg-cyanSignal/15 text-cyanSignal"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:inline">
                  <span className="mr-1 font-mono text-[0.68rem] text-slate-500">{item.chapter}</span>
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
