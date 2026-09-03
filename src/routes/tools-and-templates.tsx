import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Nav } from "@/components/enigma/Nav";
import { Footer } from "@/components/enigma/TouchBand";
import phone from "@/assets/essy-phone.jpg";
import slide from "@/assets/essy-slide.jpg";
import notes from "@/assets/essy-notes.jpg";

export const Route = createFileRoute("/tools-and-templates")({
  head: () => ({
    meta: [
      { title: "Tools & Templates — Essy Udeme" },
      {
        name: "description",
        content:
          "Notion, Figma, and deck kits for builders and storytellers. 20+ templates for products, people, and the stories worth building.",
      },
      { property: "og:title", content: "Tools & Templates — Essy Udeme" },
      {
        property: "og:description",
        content:
          "Notion, Figma, and deck kits for builders and storytellers. 20+ templates.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ToolsPage,
});

const EASE = [0.22, 1, 0.36, 1] as const;

const kits = [
  {
    title: "Product brief template",
    desc: "A one-pager that turns a fuzzy idea into a shippable scope.",
    type: "Notion",
    cover: notes,
  },
  {
    title: "Pitch deck starter",
    desc: "12 slides that respect the 3-second decision. Editable in Figma.",
    type: "Figma",
    cover: slide,
  },
  {
    title: "Onboarding teardown canvas",
    desc: "Audit any funnel step by step and find the drop-offs worth fixing.",
    type: "Notion",
    cover: phone,
  },
  {
    title: "Story spine worksheet",
    desc: "A simple scaffold for essays, launches, and founder notes.",
    type: "Notion",
    cover: notes,
  },
  {
    title: "Landing page blocks",
    desc: "Modular Figma sections — hero, proof, pricing, FAQ — ready to remix.",
    type: "Figma",
    cover: slide,
  },
  {
    title: "Weekly review file",
    desc: "The exact dashboard I use to ship, reflect, and plan the next week.",
    type: "Notion",
    cover: phone,
  },
];

function ToolsPage() {
  return (
    <div className="min-h-screen bg-backdrop">
      <main className="relative mx-auto w-full max-w-[1440px] overflow-hidden bg-backdrop">
        <Nav />

        {/* Hero */}
        <section className="px-5 pb-10 pt-8 sm:px-10 sm:pt-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[#f4f4f2] text-[13px] text-ink ring-1 ring-black/[0.04]">
                ✦
              </span>
              <span className="text-[15px] font-medium tracking-tight text-ink">
                Tools & Templates
              </span>
            </div>

            <h1 className="mt-5 font-serif text-[44px] italic leading-[1.02] tracking-[-1.5px] text-ink sm:text-[64px]">
              The stack I'd hand a younger me.
            </h1>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink/70">
              Notion, Figma, and deck kits for builders and storytellers. 20+ templates for
              products, people, and the stories worth building — free to remix.
            </p>

            {/* thumbnail stack that fans out as it enters view */}
            <div className="mt-7 flex items-end">
              {[phone, slide, notes].map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  initial={{ marginLeft: i === 0 ? 0 : -64, rotate: i === 1 ? 4 : i === 2 ? 8 : 0 }}
                  whileInView={{ marginLeft: i === 0 ? 0 : 8, rotate: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ delay: 0.35 + i * 0.1, duration: 0.6, ease: EASE }}
                  style={{ zIndex: 3 - i }}
                  className="relative h-[88px] w-[88px] rounded-[20px] object-cover shadow-[0_12px_28px_-16px_rgba(0,0,0,0.5)] ring-2 ring-backdrop"
                />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-[11px] font-medium text-ink/55">
              <span className="rounded-full bg-black/[0.06] px-3 py-1.5">✦ Skip the blank page</span>
              <span className="rounded-full bg-black/[0.06] px-3 py-1.5">◐ Steal my workflow</span>
              <span className="rounded-full bg-black/[0.06] px-3 py-1.5">✿ Free to start</span>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="px-5 pb-16 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-[15px] font-medium tracking-tight text-ink">All kits</h2>
              <span className="text-[12px] text-ink/45">{kits.length} templates</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {kits.map((k) => (
                <article
                  key={k.title}
                  className="group flex cursor-pointer flex-col overflow-hidden rounded-[22px] bg-[#f4f4f2] ring-1 ring-black/[0.04] transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]"
                >
                  <div className="relative h-[150px] overflow-hidden">
                    <img
                      src={k.cover}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-1 text-[10.5px] font-medium text-ink/70 backdrop-blur">
                      {k.type}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-[17px] font-medium leading-[1.2] tracking-[-0.3px] text-ink transition-colors group-hover:text-[#6b7d3a]">
                      {k.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-ink/60">
                      {k.desc}
                    </p>
                    <span className="mt-4 inline-flex w-fit items-center gap-1.5 text-[12px] font-medium text-ink/70 transition-colors group-hover:text-ink">
                      Open template <ArrowUpRight size={12} />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-16 sm:px-10">
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 rounded-[28px] bg-sage-soft p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 className="text-[22px] font-medium tracking-[-0.4px] text-ink">
                Want the whole bundle?
              </h2>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink/65">
                One Notion + Figma pack with everything above, plus new kits as I make them.
              </p>
            </div>
            <button className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white">
              Browse the kits <ArrowRight size={15} />
            </button>
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
