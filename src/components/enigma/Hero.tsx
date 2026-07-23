import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Premium orb background — soft glossy sphere on a warm off-white field */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_10%,#ffffff_0%,#f4f4f0_45%,#eceae4_100%)]" />
        {/* the orb */}
        <div
          aria-hidden
          className="animate-orb absolute left-1/2 top-[58%] h-[560px] w-[560px] rounded-full sm:h-[720px] sm:w-[720px]"
          style={{
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle at 34% 30%, #ffffff 0%, #f6f5f0 28%, #e6e2d6 55%, #cfc9ba 78%, #b8b0a0 100%)",
            boxShadow:
              "inset 40px 60px 120px rgba(255,255,255,0.9), inset -60px -80px 140px rgba(120,110,90,0.35), 0 60px 120px rgba(80,70,50,0.18)",
          }}
        />
        {/* soft highlight */}
        <div
          aria-hidden
          className="absolute left-1/2 top-[38%] h-[180px] w-[320px] -translate-x-1/2 rounded-full opacity-70 blur-2xl"
          style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)" }}
        />
        {/* vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_120%,rgba(0,0,0,0.10)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[86vh] max-w-6xl flex-col items-center justify-center px-4 pb-16 pt-14 text-center sm:min-h-[92vh] sm:px-10 sm:pb-24 sm:pt-20">
        <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3 py-1 text-[11px] font-medium text-ink/70 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Open for one project · Q3
        </span>

        {/* Wordmark — thin premium display */}
        <h1
          className="font-serif italic text-ink"
          style={{
            fontSize: "clamp(72px, 16vw, 220px)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            fontWeight: 300,
          }}
        >
          Essy
        </h1>

        <p className="mt-6 max-w-xl text-[clamp(14px,1.6vw,17px)] leading-relaxed text-ink/70">
          Products, people, and the quiet stories between them. A studio-of-one for
          founders who care about the seams.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white transition hover:opacity-90">
            See latest work <ArrowUpRight size={14} />
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white/70 px-5 py-2.5 text-[13px] font-medium text-ink backdrop-blur transition hover:bg-white">
            Work with me <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-ink/50">
          <span className="h-px w-8 bg-ink/20" /> scroll <span className="h-px w-8 bg-ink/20" />
        </div>
      </div>
    </section>
  );
}