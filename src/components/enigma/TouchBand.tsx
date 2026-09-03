import { ArrowUpRight } from "lucide-react";
import heroCover from "@/assets/hero-cover.png.asset.json";



export function TouchBand() {
  return (
    <section id="newsletter" className="scroll-mt-10 px-4 py-10 sm:px-8 sm:py-16">
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
    <footer className="relative overflow-hidden px-4 pb-10 pt-6 sm:px-8">
      <div className="relative mx-auto max-w-5xl">

        {/* same cover art as the hero, flipped vertically so the grey sits at
            the bottom instead of the top */}
        <div className="relative overflow-hidden rounded-[24px] bg-white p-8 text-center ring-1 ring-black/5 sm:p-12">
          <img
            src={heroCover.url}
            alt=""
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            style={{ transform: "scaleY(-1)" }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-backdrop via-transparent to-transparent" />
          <div className="relative">
            <h3 className="mx-auto max-w-[20ch] text-[clamp(22px,2.4vw,30px)] font-medium leading-tight tracking-tight">
              Let's build something people <span className="font-serif italic">remember</span>.
            </h3>
            <p className="mx-auto mt-3 max-w-[38ch] text-[13px] leading-relaxed text-muted-ink">
              Research, product, or a story that needs telling — the door is open.
            </p>

            <a href="/#contact" className="mt-6 inline-flex items-center rounded-full bg-ink px-6 py-2.5 text-[12px] font-medium text-white transition-opacity hover:opacity-90">
              Book a coffee
            </a>

            <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[12.5px] font-medium text-ink/75">
              {[
                { label: "Home", href: "/" },
                { label: "Why Not Build?", href: "/blog" },
                { label: "Tools & Templates", href: "/tools-and-templates" },
                { label: "The Product Lab", href: "/product-lab" },
                { label: "Courses", href: "/courses" },
                { label: "Projects", href: "/#projects" },
                { label: "About", href: "/#about" },
              ].map((l) => (
                <a key={l.label} href={l.href} className="transition-colors hover:text-ink">
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] text-muted-ink">
              {["Twitter / X", "LinkedIn", "Instagram"].map((l) => (
                <a key={l} href="#" className="transition-colors hover:text-ink">
                  {l}
                </a>
              ))}
              <a href="mailto:hi@essyudeme.com" className="transition-colors hover:text-ink">
                hi@essyudeme.com
              </a>
            </div>

            <div className="mt-9 border-t border-black/5 pt-5 text-[11px] text-muted-ink">
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                <a href="#" className="transition-colors hover:text-ink">Privacy</a>
                <span className="h-1 w-1 rounded-full bg-ink/15" />
                <a href="#" className="transition-colors hover:text-ink">Colophon</a>
                <span className="h-1 w-1 rounded-full bg-ink/15" />
                <span>Lagos → Everywhere</span>
              </div>
              <div className="mt-3">© 2026 Essy Udeme — made with care.</div>
            </div>
          </div>
        </div>

        {/* watermark */}
        <div
          className="pointer-events-none mt-6 select-none whitespace-nowrap text-center font-serif italic leading-none tracking-tight"
          style={{
            fontSize: "clamp(64px, 18vw, 220px)",
            background:
              "linear-gradient(180deg, rgba(17,17,17,0.10) 0%, rgba(17,17,17,0.02) 100%)",
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