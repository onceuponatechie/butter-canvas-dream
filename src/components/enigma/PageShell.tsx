import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/enigma/Nav";
import { Footer } from "@/components/enigma/TouchBand";
import { Reveal, TypeWords } from "@/components/enigma/Reveal";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-backdrop">
      <main className="relative mx-auto w-full max-w-[1440px] overflow-x-clip bg-backdrop">
        <Nav />
        {children}
        <Footer />
      </main>
    </div>
  );
}

export function PageHeader({
  icon,
  eyebrow,
  title,
  accent,
  blurb,
}: {
  icon?: string;
  eyebrow: string;
  title: string;
  accent?: string;
  blurb: string;
}) {
  return (
    <header className="px-5 pb-8 pt-14 text-center sm:px-10 sm:pb-12 sm:pt-20">
      <Reveal dir="down">
        <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-card px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-ink/70">
          {icon && <span aria-hidden>{icon}</span>}
          {eyebrow}
        </span>
      </Reveal>
      <Reveal dir="up" delay={0.08}>
        <h1 className="mx-auto mt-6 max-w-[22ch] text-[clamp(32px,5vw,60px)] font-normal leading-[1.04] tracking-tight text-ink md:tracking-[-2px]">
          {title} {accent && <span className="font-serif italic">{accent}</span>}
        </h1>
      </Reveal>
      <p className="mx-auto mt-5 max-w-[52ch] text-[14px] leading-relaxed text-ink/60">
        <TypeWords delay={0.2} step={0.03} text={blurb} />
      </p>
    </header>
  );
}

export function BackLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 text-[12.5px] font-medium text-ink/60 transition-colors hover:text-ink"
    >
      <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
      {label}
    </Link>
  );
}

export function Prose({
  sections,
}: {
  sections: { h?: string; p: string[] }[];
}) {
  return (
    <div className="mx-auto max-w-[68ch]">
      {sections.map((s, i) => (
        <Reveal key={i} dir="up" delay={0.04} className="mt-10 first:mt-0">
          {s.h && (
            <h2 className="mb-3 text-[clamp(19px,2.2vw,25px)] font-medium tracking-tight text-ink">
              {s.h}
            </h2>
          )}
          {s.p.map((para, j) => (
            <p key={j} className="mt-3.5 text-[15.5px] leading-[1.75] text-ink/75">
              {para}
            </p>
          ))}
        </Reveal>
      ))}
    </div>
  );
}
