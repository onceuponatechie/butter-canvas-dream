import { ArrowUpRight } from "lucide-react";

export function TouchBand() {
  return (
    <section className="px-4 py-10 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] bg-ink p-6 text-white sm:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-wider">
              ✦ THE LETTER
            </span>
            <h2 className="mt-5 text-[clamp(28px,3.4vw,44px)] font-medium leading-tight tracking-tight">
              Good things, straight
              <br />
              <span className="font-serif italic">to your inbox</span>
            </h2>
            <p className="mt-4 max-w-md text-[13px] leading-relaxed text-white/70">
              One idea, one artifact, every Tuesday. No filler, no funnels.
              Unsubscribe with one gentle click.
            </p>
            <div className="mt-6 flex items-center gap-1">
              {"★★★★★".split("").map((s, i) => (
                <span key={i} className="text-butter">{s}</span>
              ))}
              <span className="ml-2 text-[11px] text-white/60">Loved by 3,400+ readers</span>
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10"
          >
            <label className="text-[10px] font-semibold uppercase tracking-wider text-white/50">
              Your email
            </label>
            <input
              type="email"
              placeholder="you@somewhere.good"
              className="mt-2 w-full rounded-full bg-white/10 px-4 py-3 text-[13px] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-butter"
            />
            <button className="mt-3 inline-flex w-full items-center justify-center gap-1 rounded-full bg-[#c9e5b8] px-4 py-3 text-[13px] font-medium text-ink transition hover:opacity-90">
              Send it my way <ArrowUpRight size={14} />
            </button>
            <p className="mt-3 text-center text-[10px] text-white/40">
              No spam. No hand-wringing. Just Tuesdays.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink px-4 pb-10 pt-6 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[24px] bg-white/[0.04] p-6 ring-1 ring-white/10 sm:p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="min-w-0 grid grid-cols-2 gap-6 text-[12px] sm:grid-cols-3">
              <div>
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/50">
                  Sitemap
                </div>
                <ul className="space-y-1.5 text-white/80">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Journal</a></li>
                </ul>
              </div>
              <div>
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/50">
                  Elsewhere
                </div>
                <ul className="space-y-1.5 text-white/80">
                  <li><a href="#">Twitter / X</a></li>
                  <li><a href="#">LinkedIn</a></li>
                  <li><a href="#">Read.cv</a></li>
                </ul>
              </div>
              <div>
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/50">
                  Say hi
                </div>
                <ul className="space-y-1.5 text-white/80">
                  <li><a href="mailto:hi@essyudeme.com">hi@essyudeme.com</a></li>
                  <li className="text-white/50">Lagos → Everywhere</li>
                </ul>
              </div>
            </div>
            <div className="text-right md:min-w-[260px]">
              <h3 className="text-[clamp(22px,2.4vw,30px)] font-medium leading-tight tracking-tight">
                Let's build something
                <br />
                people <span className="font-serif italic">remember</span>.
              </h3>
              <button className="mt-4 inline-flex items-center gap-1 rounded-full bg-[#c9e5b8] px-4 py-2 text-[12px] font-medium text-ink">
                Book a coffee ↗
              </button>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-4 text-[11px] text-white/50">
            <span>© 2026 Essy Udeme — made with care.</span>
            <div className="flex gap-4">
              <a href="#">Privacy</a>
              <a href="#">Colophon</a>
            </div>
          </div>
        </div>

        {/* watermark */}
        <div
          className="pointer-events-none mt-6 select-none whitespace-nowrap text-center font-serif italic leading-none tracking-tight"
          style={{
            fontSize: "clamp(64px, 18vw, 220px)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.03) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Essy Udeme
        </div>
      </div>
    </footer>
  );
}