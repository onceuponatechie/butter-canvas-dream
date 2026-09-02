import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/enigma/Nav";
import { Footer } from "@/components/enigma/TouchBand";
import productLabCover from "@/assets/product-lab-cover.jpg.asset.json";

export const Route = createFileRoute("/product-lab")({
  head: () => ({
    meta: [
      { title: "The Product Lab — Essy Udeme" },
      {
        name: "description",
        content:
          "Teardowns, case studies, and behind-the-scenes breakdowns of products worth studying. The Product Lab by Essy Udeme.",
      },
      { property: "og:title", content: "The Product Lab — Essy Udeme" },
      {
        property: "og:description",
        content:
          "Teardowns, case studies, and behind-the-scenes breakdowns of products worth studying.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductLabPage,
});

const teardowns = [
  {
    tag: "Onboarding",
    title: "How Linear earns the first 60 seconds",
    excerpt:
      "A frame-by-frame teardown of the fastest onboarding in software, and what to steal.",
    stat: "60s",
  },
  {
    tag: "Pricing",
    title: "The pricing page that sells on feel, not math",
    excerpt:
      "Why one SaaS moved the toggle and 3x'd conversion — without touching the price.",
    stat: "3×",
  },
  {
    tag: "Growth",
    title: "The loop that turned a side project into a movement",
    excerpt:
      "One embedded widget, one share, one compounding curve. Here's the engine.",
    stat: "∞",
  },
  {
    tag: "Design",
    title: "Why this empty state is the best UX writing I've seen",
    excerpt:
      "Twelve words that turn a dead-end into a next step. A close read of the copy.",
    stat: "12",
  },
];

function ProductLabPage() {
  return (
    <div className="min-h-screen bg-backdrop">
      <main className="relative mx-auto w-full max-w-[1440px] overflow-hidden bg-backdrop">
        <Nav />

        {/* Hero — uses the product lab cover as full-bleed background */}
        <section className="px-5 pb-10 pt-8 sm:px-10 sm:pt-12">
          <div
            className="relative mx-auto flex min-h-[340px] max-w-5xl flex-col justify-between overflow-hidden rounded-[28px] bg-cover bg-center bg-no-repeat p-6 ring-1 ring-black/[0.04] sm:min-h-[400px] sm:p-8"
            style={{ backgroundImage: `url(${productLabCover.url})` }}
          >
            <div className="max-w-[58%]">
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-white/70 text-[13px] text-ink backdrop-blur">
                  🔬
                </span>
                <span className="text-[15px] font-medium tracking-tight text-ink">
                  The Product Lab
                </span>
              </div>
              <h1 className="mt-5 font-serif text-[40px] italic leading-[1.02] tracking-[-1.2px] text-ink sm:text-[56px]">
                Products worth studying.
              </h1>
              <p className="mt-3 max-w-[40ch] text-[14px] leading-relaxed text-muted-ink">
                Teardowns, case studies, and behind-the-scenes breakdowns of the products
                that got the details right.
              </p>
            </div>
            <button className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white">
              Enter the Lab <ArrowRight size={15} />
            </button>
          </div>
        </section>

        {/* Teardown list */}
        <section className="px-5 pb-16 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-[15px] font-medium tracking-tight text-ink">Latest teardowns</h2>
              <span className="text-[12px] text-ink/45">{teardowns.length} studies</span>
            </div>

            <div className="grid gap-3">
              {teardowns.map((t) => (
                <article
                  key={t.title}
                  className="group flex flex-col gap-3 rounded-[22px] border border-ink/[0.06] bg-card p-5 transition-colors hover:border-ink/15 sm:flex-row sm:items-center sm:gap-6 sm:p-6"
                >
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-butter text-[18px] font-medium text-ink">
                    {t.stat}
                  </div>
                  <div className="max-w-[48ch]">
                    <div className="flex items-center gap-2 text-[11px] font-medium text-ink/45">
                      <span className="rounded-full bg-lavender-soft px-2.5 py-1 text-ink/70">
                        {t.tag}
                      </span>
                    </div>
                    <h3 className="mt-2.5 text-[19px] font-medium leading-[1.2] tracking-[-0.4px] text-ink transition-colors group-hover:text-[#6b7d3a] sm:text-[21px]">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink/60">
                      {t.excerpt}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-ink px-4 py-2 text-[12px] font-medium text-white sm:self-center">
                    Read <ArrowUpRight size={13} />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-5 pb-16 sm:px-10">
          <div className="mx-auto max-w-5xl rounded-[28px] bg-ink p-6 text-white sm:p-8">
            <h2 className="text-[15px] font-medium tracking-tight text-white/80">
              How the Lab works
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              {[
                { n: "01", t: "Pick a product", d: "Something that earned the scroll, the signup, or the share." },
                { n: "02", t: "Tear it down", d: "Frame by frame — onboarding, pricing, empty states, the loops." },
                { n: "03", t: "Steal the move", d: "Distill it into one reusable pattern you can ship this week." },
              ].map((s) => (
                <div key={s.n}>
                  <div className="text-[12px] font-medium text-butter-deep">{s.n}</div>
                  <h3 className="mt-1.5 text-[16px] font-medium tracking-[-0.2px]">{s.t}</h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/55">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card px-5 py-2.5 text-[13px] font-medium text-ink/80 transition-colors hover:text-ink"
            >
              ← Back to home
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
