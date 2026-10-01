import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header id="top" className="relative z-40 px-5 pt-6 sm:px-10 sm:pt-8">
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/"
          className="font-serif text-[20px] italic tracking-tight text-ink"
        >
          Essy
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/#resources"
            className="text-[13px] font-medium text-ink/70 transition-colors hover:text-ink"
          >
            Stories
          </a>

          <a
            href="/#resources"
            className="text-[13px] font-medium text-ink/70 transition-colors hover:text-ink"
          >
            Resources
          </a>

          <a
            href="/#projects"
            className="text-[13px] font-medium text-ink/70 transition-colors hover:text-ink"
          >
            Projects
          </a>
          <a
            href="/#about"
            className="text-[13px] font-medium text-ink/70 transition-colors hover:text-ink"
          >
            About
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/#contact"
            className="rounded-full bg-ink px-6 py-2.5 text-[12px] font-medium text-white transition-opacity hover:opacity-90"
          >
            Say hi
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-card md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mt-4 grid gap-1 rounded-3xl border border-ink/10 bg-card p-3 md:hidden">
          <a
            href="/#resources"
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-2.5 text-[13px] font-medium text-ink/80 hover:bg-black/5"
          >
            Stories
          </a>

          <a
            href="/#resources"
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-2.5 text-[13px] font-medium text-ink/80 hover:bg-black/5"
          >
            Resources
          </a>

          <a
            href="/#projects"
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-2.5 text-[13px] font-medium text-ink/80 hover:bg-black/5"
          >
            Projects
          </a>
          <a
            href="/#about"
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-2.5 text-[13px] font-medium text-ink/80 hover:bg-black/5"
          >
            About
          </a>
        </nav>
      )}
    </header>
  );
}
