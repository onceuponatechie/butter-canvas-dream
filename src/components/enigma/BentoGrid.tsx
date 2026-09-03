import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import reading from "@/assets/essy-reading.jpg";
import phone from "@/assets/essy-phone.jpg";
import slide from "@/assets/essy-slide.jpg";
import notes from "@/assets/essy-notes.jpg";
import rabbitHole from "@/assets/rabbit-hole-3d.png";
import productLabIcon from "@/assets/product-lab-icon.png";

const EASE = [0.22, 1, 0.36, 1] as const;

const gridStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

/* Shared card anatomy ------------------------------------------------ */

function Kicker({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${className}`}
    >
      {children}
    </span>
  );
}

function CornerArrow({ tone = "light" }: { tone?: "light" | "dark" | "glass" }) {
  const tones = {
    light: "bg-ink/[0.05] text-ink group-hover:bg-ink group-hover:text-white",
    dark: "bg-white/10 text-white group-hover:bg-butter group-hover:text-ink",
    glass: "bg-white/90 text-ink backdrop-blur group-hover:bg-ink group-hover:text-white",
  };
  return (
    <span
      aria-hidden
      className={`absolute right-5 top-5 z-10 grid h-9 w-9 place-items-center rounded-full transition-colors duration-300 ${tones[tone]}`}
    >
      <ArrowUpRight
        size={15}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </span>
  );
}

const cardBase =
  "group relative flex flex-col overflow-hidden rounded-[28px] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(17,17,17,0.25)]";

/* Section ------------------------------------------------------------ */

export function BentoGrid() {
  return (
    <section id="resources" className="px-4 pb-14 pt-0 sm:px-8 sm:pb-20">
      <motion.div
        variants={gridStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto grid max-w-6xl gap-4 md:grid-cols-12 md:grid-rows-[minmax(290px,auto)_minmax(290px,auto)]"
      >
        {/* ---------- Why Not Build? — dark anchor, tall left ---------- */}
        <motion.div variants={cardReveal} className="order-1 flex md:col-span-4 md:row-span-2">
          <Link to="/blog" className={`${cardBase} w-full bg-ink p-7 text-white`}>
            <CornerArrow tone="dark" />
            <Kicker className="text-white/40">The Publication</Kicker>
            <h3 className="mt-3 text-[26px] font-medium leading-tight tracking-[-0.8px]">
              Why Not Build?
            </h3>
            <p className="mt-2.5 max-w-[28ch] text-[13px] leading-relaxed text-white/60">
              Turning curiosity into action — deep dives into products, people, careers,
              and the ideas worth building.
            </p>
            <div className="relative mt-6 flex flex-1 items-end justify-center">
              <img
                src={rabbitHole}
                alt="A laptop glowing with a spiral tunnel, surrounded by floating idea cards"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-[80%] max-w-[340px] translate-y-4 select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 md:w-[105%] md:max-w-none"
              />
            </div>
          </Link>
        </motion.div>

        {/* ---------- Tools & Templates ---------- */}
        <motion.div variants={cardReveal} className="order-2 flex md:col-span-5">
          <Link
            to="/tools-and-templates"
            className={`${cardBase} w-full justify-between bg-paper p-7 ring-1 ring-black/5`}
          >
            <CornerArrow />
            <div>
              <Kicker className="text-muted-ink">Free kits & files</Kicker>
              <h3 className="mt-3 text-[26px] font-medium leading-tight tracking-[-0.8px] text-ink">
                Tools & Templates
              </h3>
              <p className="mt-2.5 max-w-[34ch] text-[13px] leading-relaxed text-muted-ink">
                The Notion systems, Figma files, and checklists I actually use — packaged
                up and free to take.
              </p>
            </div>

            {/* thumbnail fan that spreads as it scrolls into view */}
            <div className="mt-6 flex items-end">
              {[phone, slide, notes].map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  initial={{ marginLeft: i === 0 ? 0 : -54, rotate: i === 1 ? 4 : i === 2 ? 8 : 0 }}
                  whileInView={{ marginLeft: i === 0 ? 0 : 6, rotate: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ delay: 0.45 + i * 0.1, duration: 0.6, ease: EASE }}
                  style={{ zIndex: 3 - i }}
                  className="relative h-[72px] w-[72px] rounded-[16px] object-cover shadow-[0_12px_28px_-16px_rgba(0,0,0,0.5)] ring-2 ring-paper"
                />
              ))}
            </div>
          </Link>
        </motion.div>

        {/* ---------- portrait → about ---------- */}
        <motion.div variants={cardReveal} className="order-5 md:order-3 flex md:col-span-3">
          <a href="#about" className={`${cardBase} w-full ring-1 ring-black/5`}>
            <CornerArrow tone="glass" />
            <img
              src={reading}
              alt="Essy reading a book on a sunlit sofa"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-6 pb-5 pt-14">
              <Kicker className="text-white/60">The human behind it</Kicker>
              <div className="mt-1 text-[17px] font-medium tracking-tight text-white">
                Meet Essy
              </div>
            </div>
            {/* keeps the card at a sensible height when the grid rows collapse on mobile */}
            <div className="h-64 md:h-full" />
          </a>
        </motion.div>

        {/* ---------- courses — the serif accent card ---------- */}
        <motion.div variants={cardReveal} className="order-4 flex md:col-span-3">
          <Link to="/courses" className={`${cardBase} w-full justify-between bg-sage-soft p-7`}>
            <CornerArrow />
            <div>
              <Kicker className="text-ink/45">Courses & certifications</Kicker>
              <h3 className="mt-3 font-serif text-[34px] italic leading-none tracking-tight text-ink">
                the classroom
              </h3>
              <p className="mt-3 max-w-[24ch] text-[13px] leading-relaxed text-ink/70">
                Courses I'm building, the sharpest ones I've curated — and the
                certifications earned along the way.
              </p>
            </div>
          </Link>
        </motion.div>

        {/* ---------- The Product Lab ---------- */}
        <motion.div variants={cardReveal} className="order-3 md:order-5 flex md:col-span-5">
          <Link
            to="/product-lab"
            className={`${cardBase} min-h-[280px] w-full bg-lavender-soft p-7 md:min-h-0`}
          >
            <CornerArrow />
            <div className="relative z-10 max-w-[58%]">
              <Kicker className="text-ink/45">Teardowns & case studies</Kicker>
              <h3 className="mt-3 text-[26px] font-medium leading-tight tracking-[-0.8px] text-ink">
                The Product Lab
              </h3>
              <p className="mt-2.5 text-[13px] leading-relaxed text-ink/60">
                Behind-the-scenes breakdowns of products worth studying — what shipped,
                what stuck, and why.
              </p>
            </div>
            <img
              src={productLabIcon}
              alt=""
              aria-hidden
              loading="lazy"
              width={1024}
              height={1024}
              className="pointer-events-none absolute -bottom-8 -right-6 w-[52%] max-w-[280px] select-none drop-shadow-[0_24px_44px_rgba(80,60,120,0.25)] transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:rotate-2"
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
