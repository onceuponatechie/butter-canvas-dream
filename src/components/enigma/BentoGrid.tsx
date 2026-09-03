import { ArrowUpRight, Sparkles } from "lucide-react";
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
            <div className="relative mt-4 flex flex-1 items-center justify-center">
              <img
                src={rabbitHole}
                alt="A laptop glowing with a spiral tunnel, surrounded by floating idea cards"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-[76%] max-w-[300px] translate-y-4 select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 md:w-[150%] md:max-w-none lg:w-[125%]"
              />
            </div>
          </Link>
        </motion.div>

        {/* ---------- Tools & Templates ---------- */}
        <motion.div variants={cardReveal} className="order-2 flex md:col-span-5">
          <Link
            to="/tools-and-templates"
            className={`${cardBase} min-h-[290px] w-full bg-[#f4f4f2] p-7 ring-1 ring-black/5`}
          >
            <CornerArrow />
            <div className="relative z-10 flex h-full max-w-[56%] flex-col">
              <Kicker className="text-muted-ink">Free kits & files</Kicker>
              <h3 className="mt-3 text-[26px] font-medium leading-tight tracking-[-0.8px] text-ink">
                Tools & Templates
              </h3>
              <p className="mt-2.5 text-[13px] leading-relaxed text-muted-ink">
                The Notion systems, Figma files, and checklists I actually use — free
                to take.
              </p>
              <span className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-ink px-4 py-2 text-[12px] font-medium text-white transition-colors duration-300 group-hover:bg-sage">
                Browse the kits <ArrowUpRight size={13} />
              </span>
            </div>

            {/* fanned photo stack that spreads as it scrolls into view */}
            <div className="pointer-events-none absolute bottom-0 right-5 flex items-end lg:right-7">
              {[phone, slide, notes].map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  initial={{ marginLeft: i === 0 ? 0 : -60, rotate: 0, y: 22 }}
                  whileInView={{
                    marginLeft: i === 0 ? 0 : -22,
                    rotate: i === 0 ? -7 : i === 1 ? -2 : 4,
                    y: i === 1 ? 6 : 16,
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.7, ease: EASE }}
                  style={{ zIndex: i }}
                  className="relative h-[104px] w-[66px] rounded-[14px] object-cover shadow-[0_16px_34px_-18px_rgba(0,0,0,0.45)] ring-[3px] ring-[#f4f4f2] lg:h-[160px] lg:w-[100px]"
                />
              ))}
              {/* minimalist circular icon centred over the stack */}
              <span className="absolute bottom-[34%] left-1/2 z-10 grid h-10 w-10 -translate-x-1/2 place-items-center rounded-full bg-ink ring-[4px] ring-[#f4f4f2] lg:h-13 lg:w-13">
                <Sparkles size={18} className="text-butter" />
              </span>
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
            className={`${cardBase} min-h-[280px] w-full bg-[#f4f4f2] p-7 ring-1 ring-black/5 md:min-h-0`}
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
