import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";

type ResourceChild = { label: string; to: string };

const resourceChildren: ResourceChild[] = [
  { label: "Tools & Templates", to: "/tools-and-templates" },
  { label: "The Product Lab", to: "/product-lab" },
  { label: "Courses & Certifications", to: "/courses" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);

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
          <Link
            to="/blog"
            className="text-[13px] font-medium text-ink/70 transition-colors hover:text-ink"
          >
            Stories
          </Link>

          {/* Resources — dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setResOpen(true)}
            onMouseLeave={() => setResOpen(false)}
          >
            <button
              type="button"
              onClick={() => setResOpen((v) => !v)}
              className="inline-flex items-center gap-1 text-[13px] font-medium text-ink/70 transition-colors hover:text-ink"
            >
              Resources
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${resOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* pt-3 (not mt-3) keeps the gap hoverable so the dropdown
                doesn't close while the cursor travels down to it */}
            <div
              className={`absolute left-1/2 top-full z-50 pt-3 -translate-x-1/2 transition-all duration-200 ${
                resOpen
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none -translate-y-1 opacity-0"
              }`}
            >
              <div className="grid min-w-[210px] gap-1 rounded-2xl border border-ink/10 bg-card p-2 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]">
                {resourceChildren.map((c) => (
                  <Link
                    key={c.to}
                    to={c.to}
                    className="rounded-xl px-3.5 py-2.5 text-[13px] font-medium text-ink/80 transition-colors hover:bg-black/5 hover:text-ink"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

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
          <Link
            to="/blog"
            onClick={() => setOpen(false)}
            className="rounded-2xl px-4 py-2.5 text-[13px] font-medium text-ink/80 hover:bg-black/5"
          >
            Stories
          </Link>

          {/* Resources — collapsible */}
          <button
            type="button"
            onClick={() => setResOpen((v) => !v)}
            className="flex items-center justify-between rounded-2xl px-4 py-2.5 text-[13px] font-medium text-ink/80 hover:bg-black/5"
          >
            Resources
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${resOpen ? "rotate-180" : ""}`}
            />
          </button>
          {resOpen && (
            <div className="grid gap-1 pl-4">
              {resourceChildren.map((c) => (
                <Link
                  key={c.to}
                  to={c.to}
                  onClick={() => {
                    setOpen(false);
                    setResOpen(false);
                  }}
                  className="rounded-2xl px-4 py-2.5 text-[13px] font-medium text-ink/70 hover:bg-black/5"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          )}

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
