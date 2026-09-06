import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, ArrowUpRight } from "lucide-react";
import { PageShell, PageHeader, BackLink } from "@/components/enigma/PageShell";
import { Reveal } from "@/components/enigma/Reveal";
import { kits, kitCategories } from "@/content/kits";

export const Route = createFileRoute("/tools-and-templates")({
  head: () => ({
    meta: [
      { title: "Tools & Templates — Essy Udeme" },
      {
        name: "description",
        content:
          "Downloadable kits for builders: product briefs, idea scorecards, pitch deck outlines, rate sheets and checklists — the stack I'd hand a younger me.",
      },
      { property: "og:title", content: "Tools & Templates — Essy Udeme" },
      {
        property: "og:description",
        content: "Free and paid kits for building, pricing, writing and shipping your first real product.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ToolsPage,
});

function ToolsPage() {
  const [cat, setCat] = useState<string>("All");
  const list = cat === "All" ? kits : kits.filter((k) => k.category === cat);

  return (
    <PageShell>
      <PageHeader
        icon="✦"
        eyebrow="Tools & Templates"
        title="The stack I'd hand a"
        accent="younger me"
        blurb="Every kit here came out of real work — a brief I actually used, a quote that actually closed, a checklist that caught a real mistake."
      />

      <div className="px-5 sm:px-10">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-2">
          {kitCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-1.5 text-[12px] font-medium transition-colors ${
                cat === c
                  ? "border-ink bg-ink text-white"
                  : "border-ink/12 text-ink/65 hover:border-ink/30 hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* masonry — CSS columns keep the pinboard rhythm without a JS layout pass */}
      <section className="px-5 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-[1180px] [column-gap:22px] sm:columns-2 lg:columns-3">
          {list.map((k, i) => (
            <Reveal key={k.slug} dir="up" delay={0.04 * (i % 3)} className="mb-[22px] block break-inside-avoid">
              <article
                className={`${k.tint} group flex flex-col rounded-[24px] p-6 ring-1 ring-black/[0.06] transition-shadow hover:shadow-[0_26px_54px_-34px_rgba(17,17,17,0.4)]`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                    {k.category}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10.5px] font-semibold ${
                      k.price === "Free" ? "bg-sage text-ink" : "bg-ink text-white"
                    }`}
                  >
                    {k.price}
                  </span>
                </div>

                <h3 className="mt-5 text-[19px] font-medium leading-snug tracking-tight text-ink">
                  {k.title}
                </h3>
                <p
                  className={`mt-3 text-[13px] leading-relaxed text-ink/65 ${
                    k.span === "tall" ? "pb-10" : ""
                  }`}
                >
                  {k.desc}
                </p>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-black/[0.07] pt-4">
                  <span className="text-[11.5px] text-muted-ink">{k.format}</span>
                  <a
                    href={k.file}
                    download
                    className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[12px] font-medium text-white transition-colors hover:bg-sage hover:text-ink"
                  >
                    <Download size={13} />
                    {k.price === "Free" ? "Download" : "Get preview"}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-10">
        <Reveal dir="up" className="mx-auto max-w-[1180px] overflow-hidden rounded-[28px] bg-ink p-8 text-white sm:p-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr_auto] md:items-center">
            <div className="min-w-0">
              <h2 className="text-[clamp(24px,3vw,36px)] font-normal leading-tight tracking-tight">
                Want the whole shelf, <span className="font-serif italic">one download</span>?
              </h2>
              <p className="mt-4 max-w-[48ch] text-[13.5px] leading-relaxed text-white/70">
                Every kit, bundled, plus the two I only send to people who ask. Tell me what you're
                building and I'll point you at the right three.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex w-fit items-center gap-1.5 rounded-full bg-sage px-6 py-3 text-[13px] font-medium text-ink transition-opacity hover:opacity-90"
            >
              Ask for the bundle <ArrowUpRight size={14} />
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 text-center">
          <BackLink to="/" label="Back to home" />
        </div>
      </section>
    </PageShell>
  );
}
