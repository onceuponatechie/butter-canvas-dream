import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell, PageHeader, BackLink } from "@/components/enigma/PageShell";
import { Reveal } from "@/components/enigma/Reveal";
import { posts, postCategories } from "@/content/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Why Not Build? — Essays by Essy Udeme" },
      {
        name: "description",
        content:
          "Turning curiosity into action. Essays on products, careers, money, education and the law-meets-technology gap — written while the work is still in progress.",
      },
      { property: "og:title", content: "Why Not Build? — Essays by Essy Udeme" },
      {
        property: "og:description",
        content:
          "Essays on products, careers, money and education — evidence collected in public.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [cat, setCat] = useState<string>("All");
  const [featured, ...rest] = posts;
  const list = cat === "All" ? rest : posts.filter((p) => p.category === cat);

  return (
    <PageShell>
      <PageHeader
        icon="◐"
        eyebrow="Why Not Build?"
        title="Curiosity, turned into"
        accent="action"
        blurb="Essays written while the work is still in progress — what I noticed, what I tested, and what it cost me to find out."
      />

      <div className="px-5 sm:px-10">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-center gap-2">
          {postCategories.map((c) => (
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

      {cat === "All" && (
        <section className="px-5 pt-12 sm:px-10">
          <Reveal dir="up" className="mx-auto max-w-[1180px]">
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="group grid overflow-hidden rounded-[28px] bg-ink text-white md:grid-cols-2"
            >
              <div className="order-2 p-7 sm:p-10 md:order-1">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]">
                  Latest · {featured.category}
                </span>
                <h2 className="mt-6 text-[clamp(24px,3vw,36px)] font-normal leading-tight tracking-tight">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-[46ch] text-[14px] leading-relaxed text-white/70">
                  {featured.excerpt}
                </p>
                <div className="mt-7 flex items-center gap-3 text-[11.5px] text-white/55">
                  <span>{featured.date}</span>
                  <span className="h-1 w-1 rounded-full bg-white/25" />
                  <span>{featured.read} read</span>
                </div>
                <span className="mt-7 inline-flex items-center gap-1.5 rounded-full bg-sage px-5 py-2.5 text-[12.5px] font-medium text-ink">
                  Read the essay
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={featured.cover}
                  alt={featured.coverAlt}
                  className="h-full min-h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      <section className="px-5 py-14 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="mb-8 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-ink">
            {cat === "All" ? "More stories" : `${cat} stories`}
          </h2>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.slug} dir="up" delay={0.05 * (i % 3)}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-card ring-1 ring-black/[0.06] transition-shadow hover:shadow-[0_24px_50px_-32px_rgba(17,17,17,0.35)]"
                >
                  <img
                    src={p.cover}
                    alt={p.coverAlt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                      {p.category} · {p.kicker}
                    </span>
                    <h3 className="mt-3 text-[18.5px] font-medium leading-snug tracking-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink/65">{p.excerpt}</p>
                    <div className="mt-5 flex items-center gap-3 text-[11.5px] text-muted-ink">
                      <span>{p.date}</span>
                      <span className="h-1 w-1 rounded-full bg-ink/15" />
                      <span>{p.read} read</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <BackLink to="/" label="Back to home" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
