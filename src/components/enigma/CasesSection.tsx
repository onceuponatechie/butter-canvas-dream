import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import books from "@/assets/essy-books.jpg";
import slide from "@/assets/essy-slide.jpg";
import notes from "@/assets/essy-notes.jpg";
import laptopDash from "@/assets/essy-laptop-dash.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;
const INTERVAL = 6000;

type Row = { label: string; detail: string; value: string };

type Adventure = {
  tag: string;
  title: string;
  subtitle: string;
  body: string;
  img: string;
  alt: string;
  to: string;
  cta: string;
  rows?: Row[];
  quote?: string;
};

const adventures: Adventure[] = [
  {
    tag: "Shop",
    title: "Pitch Deck Starter",
    subtitle: "Tools & Templates",
    body: "Twelve slides that respect the three-second decision — structured the way investors actually read, and editable in Figma without touching a single master component.",
    img: slide,
    alt: "A pitch deck slide open on a laptop",
    to: "/tools-and-templates",
    cta: "Browse the kits",
    rows: [
      { label: "Format", detail: "Figma file", value: "12 slides" },
      { label: "Setup", detail: "Duplicate & edit", value: "20 min" },
      { label: "Price", detail: "Free to start", value: "₦0" },
    ],
  },
  {
    tag: "Read",
    title: "Rabbit holes are a feature",
    subtitle: "Why Not Build?",
    body: "Curiosity compounds. A short field guide to following the thread all the way down without losing the plot — and turning what you find into something you can actually build.",
    img: books,
    alt: "A stack of books on a desk",
    to: "/blog",
    cta: "Read the publication",
    quote:
      "You don't have to know exactly what you're building your life into before you start building.",
  },
  {
    tag: "Learn",
    title: "Build Your First Digital Product",
    subtitle: "Courses & Certifications",
    body: "From fuzzy idea to a real thing people can use. Research it, scope it, ship it, then tell the story — the same loop I run in public, taught step by step.",
    img: laptopDash,
    alt: "A dashboard being designed on a laptop",
    to: "/courses",
    cta: "Enter the classroom",
    rows: [
      { label: "Format", detail: "Self-paced", value: "6 lessons" },
      { label: "Level", detail: "No code needed", value: "Beginner" },
      { label: "Status", detail: "In the works", value: "Soon" },
    ],
  },
  {
    tag: "Shop",
    title: "Product Brief Template",
    subtitle: "Tools & Templates",
    body: "The one-pager that turns a fuzzy idea into a scope you can hand to someone else. Problem, user, bet, and the smallest thing worth shipping first.",
    img: notes,
    alt: "A notebook open beside a laptop",
    to: "/tools-and-templates",
    cta: "Browse the kits",
    rows: [
      { label: "Format", detail: "Notion doc", value: "1 page" },
      { label: "Best for", detail: "Scoping an idea", value: "Day one" },
      { label: "Price", detail: "Free to start", value: "₦0" },
    ],
  },
];

export function CasesSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % adventures.length), INTERVAL);
    return () => clearInterval(id);
  }, [paused, reduceMotion]);

  return (
    <section className="relative px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-[clamp(28px,3.6vw,44px)] font-medium tracking-tight text-ink">
          Pick an <span className="font-serif italic">adventure</span>
        </h2>
        <p className="mx-auto mt-2 max-w-md text-[12px] text-muted-ink">
          Each one leads somewhere small and useful.
        </p>
      </div>

      <div
        className="mx-auto mt-12 max-w-6xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${index * 100}%` }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {adventures.map((a) => (
              <div key={a.title} className="w-full shrink-0 px-0.5">
                <AdventureCard {...a} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* dots */}
        <div className="mt-10 flex items-center justify-center gap-2.5">
          {adventures.map((a, i) => (
            <button
              key={a.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${a.title}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-7 bg-ink" : "w-1.5 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AdventureCard({ tag, title, subtitle, body, img, alt, to, cta, rows, quote }: Adventure) {
  return (
    <article className="grid items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] md:gap-14">
      {/* framed, slightly slanted image */}
      <div>
        <div className="rotate-[-1.6deg] rounded-[30px] bg-paper p-2.5 shadow-[0_30px_60px_-34px_rgba(17,17,17,0.45)] ring-1 ring-black/[0.06]">
          <img
            src={img}
            alt={alt}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-[22px] object-cover"
          />
        </div>
        <div className="mt-6 text-right">
          <div className="text-[20px] font-medium tracking-tight text-ink">{title}</div>
          <div className="mt-0.5 text-[13px] text-muted-ink">{subtitle}</div>
        </div>
      </div>

      {/* copy + value rows */}
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-ink/70">
          <span className="h-1.5 w-1.5 rounded-full bg-sage" /> {tag}
        </span>

        <p className="mt-5 max-w-[46ch] text-[clamp(15px,1.7vw,20px)] leading-[1.6] tracking-tight text-ink">
          {body}
        </p>

        {quote ? (
          <blockquote className="mt-8 border-l border-ink/15 pl-6 md:pl-8">
            <p className="max-w-[40ch] font-serif text-[clamp(17px,2vw,24px)] italic leading-snug text-ink/75">
              “{quote}”
            </p>
          </blockquote>
        ) : (
          <div className="mt-8 border-l border-ink/15 pl-6 md:pl-8">
            {rows?.map((r) => (
              <div
                key={r.label}
                className="grid gap-0.5 border-b border-ink/10 py-4 last:border-b-0 md:grid-cols-[1fr_1fr_auto] md:items-center md:gap-4"
              >
                <span className="text-[14px] text-ink">{r.label}</span>
                <span className="text-[14px] text-muted-ink">{r.detail}</span>
                <span className="text-[14px] text-ink md:text-right">{r.value}</span>
              </div>
            ))}
          </div>
        )}

        <a
          href={to}
          className="group/cta mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white"
        >
          {cta}
          <ArrowUpRight
            size={15}
            className="text-butter-deep transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
          />
        </a>
      </div>
    </article>
  );
}
