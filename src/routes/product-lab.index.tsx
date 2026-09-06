import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell, PageHeader, BackLink } from "@/components/enigma/PageShell";
import { Reveal } from "@/components/enigma/Reveal";
import { lab, labKinds } from "@/content/lab";
import labCover from "@/assets/product-lab-cover.jpg.asset.json";

export const Route = createFileRoute("/product-lab/")({
  head: () => ({
    meta: [
      { title: "The Product Lab — Teardowns & experiments by Essy Udeme" },
      {
        name: "description",
        content:
          "Product teardowns, live experiments and decision logs. Taking products apart to work out why they work, then testing the moves worth stealing.",
      },
      { property: "og:title", content: "The Product Lab — Essy Udeme" },
      {
        property: "og:description",
        content: "Teardowns, experiments and decision logs from the workbench.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LabIndex,
});

function LabIndex() {
  const [kind, setKind] = useState<string>("All");
  const list = kind === "All" ? lab : lab.filter((l) => l.kind === kind);

  return (
    <PageShell>
      <section className="px-4 pt-6 sm:px-8">
        <Reveal dir="up" className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[30px]">
          <img
            src={labCover.url}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-backdrop" />
          <div className="relative px-6 py-14 text-center sm:px-12 sm:py-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-card px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-ink/70">
              <span aria-hidden>🔬</span> The Product Lab
            </span>
            <h1 className="mx-auto mt-6 max-w-[20ch] text-[clamp(32px,5vw,58px)] font-normal leading-[1.05] tracking-tight text-ink md:tracking-[-2px]">
              Products worth <span className="font-serif italic">studying</span>
            </h1>
            <p className="mx-auto mt-5 max-w-[50ch] text-[14px] leading-relaxed text-ink/65">
              I take things apart to find the decision behind the design — then test whether the move
              survives contact with my own work.
            </p>
          </div>
        </Reveal>
      </section>

      <div className="px-5 pt-10 sm:px-10">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-2">
          {labKinds.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setKind(k)}
              className={`rounded-full border px-4 py-1.5 text-[12px] font-medium transition-colors ${
                kind === k
                  ? "border-ink bg-ink text-white"
                  : "border-ink/12 text-ink/65 hover:border-ink/30 hover:text-ink"
              }`}
            >
              {k}
            </button>
          ))}
        </div>
      </div>

      <section className="px-5 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto grid max-w-[1180px] gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((l, i) => (
            <Reveal key={l.slug} dir="up" delay={0.05 * (i % 3)}>
              <Link
                to="/product-lab/$slug"
                params={{ slug: l.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-card ring-1 ring-black/[0.06] transition-shadow hover:shadow-[0_24px_50px_-32px_rgba(17,17,17,0.35)]"
              >
                <div className="relative">
                  <img
                    src={l.cover}
                    alt={l.coverAlt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink">
                    {l.kind}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[18.5px] font-medium leading-snug tracking-tight text-ink">
                    {l.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink/65">{l.excerpt}</p>
                  <div className="mt-5 flex items-end justify-between border-t border-black/[0.07] pt-4">
                    <div>
                      <div className="text-[20px] font-medium tracking-tight text-ink">{l.stat}</div>
                      <div className="text-[11px] text-muted-ink">{l.statLabel}</div>
                    </div>
                    <span className="text-[11.5px] text-muted-ink">{l.date}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-10">
        <Reveal dir="up" className="mx-auto max-w-[1180px] rounded-[28px] bg-ink p-8 text-white sm:p-12">
          <h2 className="text-[clamp(24px,3vw,36px)] font-normal leading-tight tracking-tight">
            How the Lab <span className="font-serif italic">works</span>
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {[
              { n: "01", h: "Notice", p: "Something works and I can't explain why. That's the trigger." },
              { n: "02", h: "Take it apart", p: "Ninety minutes, screenshots, timings, and the trade-off behind each choice." },
              { n: "03", h: "Test the steal", p: "One move goes into my own work. If it survives, it gets published." },
            ].map((s) => (
              <div key={s.n}>
                <div className="text-[11px] font-semibold tracking-[0.2em] text-white/40">{s.n}</div>
                <div className="mt-3 text-[17px] font-medium tracking-tight">{s.h}</div>
                <p className="mt-2 text-[13px] leading-relaxed text-white/65">{s.p}</p>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-1.5 rounded-full bg-sage px-6 py-3 text-[13px] font-medium text-ink transition-opacity hover:opacity-90"
          >
            Suggest a teardown <ArrowUpRight size={14} />
          </Link>
        </Reveal>
        <div className="mt-12 text-center">
          <BackLink to="/" label="Back to home" />
        </div>
      </section>
    </PageShell>
  );
}
