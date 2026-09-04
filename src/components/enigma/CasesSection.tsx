import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, TypeWords } from "@/components/enigma/Reveal";
import books from "@/assets/essy-books.jpg";
import slide from "@/assets/essy-slide.jpg";
import notes from "@/assets/essy-notes.jpg";
import laptopDash from "@/assets/essy-laptop-dash.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;
const INTERVAL = 6000;
const SWIPE_THRESHOLD = 50;

type Adventure = {
  tag: string;
  title: string;
  subtitle: string;
  body: string;
  img: string;
  alt: string;
  to: string;
  cta: string;
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
  },
];

export function CasesSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const swipeStart = useRef<number | null>(null);

  const next = () => setIndex((i) => (i + 1) % adventures.length);
  const prev = () => setIndex((i) => (i - 1 + adventures.length) % adventures.length);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, reduceMotion]);

  /* Swipe is handled with pointer events rather than a draggable track: the
     track's x is already driven by `index`, so making it draggable fought
     that animation and snapped every touch back to the first card. */
  const onPointerDown = (e: React.PointerEvent) => {
    swipeStart.current = e.clientX;
    setPaused(true);
  };

  const endSwipe = (clientX?: number) => {
    const start = swipeStart.current;
    swipeStart.current = null;
    setPaused(false);
    if (start == null || clientX == null) return;
    const dx = clientX - start;
    if (dx <= -SWIPE_THRESHOLD) next();
    else if (dx >= SWIPE_THRESHOLD) prev();
  };

  return (
    <section className="relative px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal dir="down" blur>
          <h2 className="text-[clamp(28px,3.6vw,44px)] font-medium tracking-tight text-ink">
            Pick an <span className="font-serif italic">adventure</span>
          </h2>
        </Reveal>
        <p className="mx-auto mt-2 max-w-md text-[12px] text-muted-ink">
          <TypeWords delay={0.2} step={0.04} text="Each one leads somewhere small and useful." />
        </p>
      </div>

      <div
        className="mx-auto mt-12 max-w-6xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* the negative margin pairs with each slide's padding, so the slide
            either side sits well off the edge instead of bleeding into view */}
        <div
          className="-mx-4 touch-pan-y overflow-hidden md:-mx-12"
          onPointerDown={onPointerDown}
          onPointerUp={(e) => endSwipe(e.clientX)}
          onPointerCancel={() => endSwipe()}
        >
          <motion.div
            className="flex"
            animate={{ x: `-${index * 100}%` }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {adventures.map((a) => (
              <div key={a.title} className="w-full shrink-0 px-4 md:px-12">
                <AdventureCard {...a} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* dots — or swipe the card itself */}
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

function AdventureCard({ tag, title, subtitle, body, img, alt, to, cta }: Adventure) {
  return (
    <article className="grid items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] md:gap-14">
      {/* framed, slightly slanted image */}
      <div>
        <div className="rotate-[-1.6deg] rounded-[30px] bg-paper p-2.5 shadow-[0_10px_26px_-20px_rgba(17,17,17,0.25)] ring-1 ring-black/[0.06]">
          <img
            src={img}
            alt={alt}
            loading="lazy"
            draggable={false}
            className="aspect-[4/3] w-full rounded-[22px] object-cover"
          />
        </div>
        <div className="mt-6 text-right">
          <div className="text-[20px] font-medium tracking-tight text-ink">{title}</div>
          <div className="mt-0.5 text-[13px] text-muted-ink">{subtitle}</div>
        </div>
      </div>

      {/* copy */}
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-ink/70">
          <span className="h-1.5 w-1.5 rounded-full bg-sage" /> {tag}
        </span>

        <p className="mt-5 max-w-[46ch] text-[clamp(15px,1.7vw,20px)] leading-[1.6] tracking-tight text-ink">
          {body}
        </p>

        <a
          href={to}
          className="mt-8 inline-flex w-fit items-center rounded-full bg-ink px-6 py-2.5 text-[12px] font-medium text-white transition-opacity hover:opacity-90"
        >
          {cta}
        </a>
      </div>
    </article>
  );
}
