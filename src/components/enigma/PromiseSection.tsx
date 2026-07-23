import { ArrowUpRight, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import laptopDash from "@/assets/essy-laptop-dash.jpg";
import insight from "@/assets/essy-insight.jpg";
import phone from "@/assets/essy-phone.jpg";
import slide from "@/assets/essy-slide.jpg";

const projects = [
  {
    name: "Streamline Dashboard",
    tag: "Product · Dashboard · SaaS",
    year: "2026",
    body: "A single canvas for revenue ops. Cut daily reporting from 2 hours to 6 minutes.",
    img: laptopDash,
    bg: "#f5e9a3",
    stat: "38%",
    statLabel: "faster reporting",
  },
  {
    name: "Insight Studio",
    tag: "Web · Analytics",
    year: "2025",
    body: "A calmer analytics home for a research team who lived in eight tabs at once.",
    img: insight,
    bg: "#cde5c1",
    stat: "4×",
    statLabel: "less tab switching",
  },
  {
    name: "Pocket Coach",
    tag: "iOS · Wellness",
    year: "2025",
    body: "A pocket-sized nudge app that helps founders keep one promise a day.",
    img: phone,
    bg: "#e7d6f0",
    stat: "48★",
    statLabel: "App Store",
  },
  {
    name: "Sage Deck",
    tag: "Brand · Deck System",
    year: "2024",
    body: "A deck kit that reads like a magazine and closes like a founder brief.",
    img: slide,
    bg: "#ececea",
    stat: "3 May",
    statLabel: "launch day",
  },
];

export function PromiseSection() {
  return (
    <section className="relative px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-serif text-[clamp(44px,7vw,88px)] italic leading-none tracking-tight text-ink">
          projects
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[13px] leading-relaxed text-muted-ink">
          A handful of the things I've made lately — for people I like, on ideas I couldn't stop thinking about.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-6xl space-y-6 sm:space-y-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} index={i} total={projects.length} {...p} />
        ))}
      </div>

      <div className="mx-auto mt-14 flex max-w-5xl items-center justify-center">
        <button className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-5 py-2.5 text-[13px] font-medium text-ink">
          See all projects <ArrowUpRight size={14} />
        </button>
      </div>
    </section>
  );
}

type ProjectProps = (typeof projects)[number] & { index: number; total: number };

function ProjectCard({ name, tag, year, body, img, bg, stat, statLabel, index, total }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const isLast = index === total - 1;
  const ring = "ring-1 ring-black/5";

  return (
    <div ref={ref} className="sticky" style={{ top: `${80 + index * 18}px`, zIndex: index + 1 }}>
      <motion.article
        style={{ scale: isLast ? 1 : scale, opacity: isLast ? 1 : opacity, backgroundColor: bg }}
        className={`overflow-hidden rounded-[28px] p-5 sm:p-8 ${ring}`}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">
          <div className="flex min-w-0 flex-col justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2.5 py-1 text-[10px] font-medium text-ink/70">
                <span className="h-1.5 w-1.5 rounded-full bg-ink" /> Case study
              </span>
              <h3 className="mt-4 text-[clamp(26px,3.2vw,40px)] font-medium leading-tight tracking-tight">
                {name}
              </h3>
              <div className="mt-2 text-[11px] font-medium uppercase tracking-wider text-ink/60">
                {tag} · {year}
              </div>
              <p className="mt-4 max-w-md text-[13px] leading-relaxed text-ink/70">{body}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="inline-flex items-center gap-1 rounded-full bg-ink px-4 py-2 text-[12px] font-medium text-white">
                View Case Study <ArrowUpRight size={12} />
              </button>
              <button className="rounded-full border border-ink/20 bg-white/60 px-4 py-2 text-[12px] font-medium text-ink">
                Summary
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <img src={img} alt={name} className="h-52 w-full object-cover sm:h-72" loading="lazy" />
            </div>
            <div className="absolute -top-3 right-3 flex items-center gap-2 rounded-2xl bg-white/95 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.10)] sm:right-6">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-white">
                <TrendingUp size={12} />
              </span>
              <div>
                <div className="text-[13px] font-medium leading-none tracking-tight">{stat}</div>
                <div className="text-[9px] uppercase tracking-wide text-muted-ink">{statLabel}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}