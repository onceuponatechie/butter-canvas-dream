import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Nav } from "@/components/enigma/Nav";
import { Footer } from "@/components/enigma/TouchBand";
import rabbitHole from "@/assets/rabbit-hole-3d.png";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "The Rabbit Hole — Stories by Essy Udeme" },
      {
        name: "description",
        content:
          "Deep dives into products, people, ideas, and the random rabbit holes in between. The blog and thoughts of Essy Udeme.",
      },
      { property: "og:title", content: "The Rabbit Hole — Stories by Essy Udeme" },
      {
        property: "og:description",
        content:
          "Deep dives into products, people, ideas, and the random rabbit holes in between.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    tag: "Product",
    title: "What I learned rebuilding my onboarding flow three times",
    excerpt:
      "The first version was clever. The second was clean. The third was the one people actually finished.",
    date: "Aug 2026",
    read: "6 min",
  },
  {
    tag: "People",
    title: "The quiet power of writing in the open",
    excerpt:
      "Notes, half-finished thoughts, and why publishing your drafts makes you a better builder.",
    date: "Jul 2026",
    read: "4 min",
  },
  {
    tag: "Ideas",
    title: "Rabbit holes are a feature, not a bug",
    excerpt:
      "Curiosity is compounding. A short field guide to following the thread without losing the plot.",
    date: "Jul 2026",
    read: "5 min",
  },
  {
    tag: "Craft",
    title: "Designing for the 3-second decision",
    excerpt:
      "How I structure landing pages, decks, and product surfaces to earn the next scroll.",
    date: "Jun 2026",
    read: "7 min",
  },
  {
    tag: "Notes",
    title: "A younger me would have needed this",
    excerpt:
      "The stack, the file, and the reads I'd hand someone starting out today — distilled.",
    date: "Jun 2026",
    read: "3 min",
  },
];

function BlogPage() {
  return (
    <div className="min-h-screen bg-backdrop">
      <main className="relative mx-auto w-full max-w-[1440px] overflow-hidden bg-backdrop">
        <Nav />

        {/* Hero */}
        <section className="px-5 pb-10 pt-8 sm:px-10 sm:pt-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-ink text-[13px] text-white">
                ◐
              </span>
              <span className="text-[15px] font-medium tracking-tight text-ink">
                The Rabbit Hole
              </span>
            </div>

            <h1 className="mt-5 font-serif text-[44px] italic leading-[1.02] tracking-[-1.5px] text-ink sm:text-[64px]">
              Stories worth building.
            </h1>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink/70">
              Deep dives into products, people, ideas, and the random rabbit holes in
              between. Curious by nature, obsessed with what's under the surface.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-2 text-[11px] font-medium text-ink/55">
              <span className="rounded-full bg-black/[0.06] px-3 py-1.5">All</span>
              <span className="rounded-full bg-black/[0.06] px-3 py-1.5">Product</span>
              <span className="rounded-full bg-black/[0.06] px-3 py-1.5">People</span>
              <span className="rounded-full bg-black/[0.06] px-3 py-1.5">Ideas</span>
              <span className="rounded-full bg-black/[0.06] px-3 py-1.5">Craft</span>
              <span className="rounded-full bg-black/[0.06] px-3 py-1.5">Notes</span>
            </div>
          </div>
        </section>

        {/* Featured */}
        <section className="px-5 pb-8 sm:px-10">
          <div className="mx-auto grid max-w-5xl gap-3 rounded-[28px] bg-ink p-6 text-white sm:grid-cols-[1.4fr_1fr] sm:p-8">
            <div>
              <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80">
                Featured · Product
              </span>
              <h2 className="mt-4 text-[26px] font-medium leading-[1.1] tracking-[-0.8px] sm:text-[32px]">
                What I learned rebuilding my onboarding flow three times
              </h2>
              <p className="mt-3 max-w-[44ch] text-[13.5px] leading-relaxed text-white/60">
                The first version was clever. The second was clean. The third was the one
                people actually finished. A teardown of what changed and why.
              </p>
              <div className="mt-5 flex items-center gap-3 text-[12px] text-white/50">
                <span>Aug 2026</span>
                <span>·</span>
                <span>6 min read</span>
              </div>
              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-butter px-5 py-2.5 text-[13px] font-medium text-ink">
                Read the piece <ArrowUpRight size={14} />
              </button>
            </div>
            <div className="relative hidden items-end justify-center sm:flex">
              <img
                src={rabbitHole}
                alt="A laptop glowing with a spiral tunnel"
                loading="lazy"
                className="w-[88%] max-w-none select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </section>

        {/* List */}
        <section className="px-5 pb-16 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-[15px] font-medium tracking-tight text-ink">All stories</h2>
              <span className="text-[12px] text-ink/45">{posts.length} posts</span>
            </div>

            <div className="grid gap-3">
              {posts.map((p) => (
                <article
                  key={p.title}
                  className="group flex flex-col gap-3 rounded-[22px] border border-ink/[0.06] bg-card p-5 transition-colors hover:border-ink/15 sm:flex-row sm:items-center sm:justify-between sm:p-6"
                >
                  <div className="max-w-[52ch]">
                    <div className="flex items-center gap-2 text-[11px] font-medium text-ink/45">
                      <span className="rounded-full bg-sage-soft px-2.5 py-1 text-ink/70">
                        {p.tag}
                      </span>
                      <span>{p.date}</span>
                      <span>·</span>
                      <span>{p.read} read</span>
                    </div>
                    <h3 className="mt-2.5 text-[19px] font-medium leading-[1.2] tracking-[-0.4px] text-ink transition-colors group-hover:text-[#6b7d3a] sm:text-[22px]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink/60">
                      {p.excerpt}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-ink px-4 py-2 text-[12px] font-medium text-white sm:self-center">
                    Read <ArrowRight size={13} />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Back */}
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
