import { ArrowUpRight, Layers } from "lucide-react";
import { motion } from "framer-motion";
import reading from "@/assets/essy-reading.jpg";
import phone from "@/assets/essy-phone.jpg";
import slide from "@/assets/essy-slide.jpg";
import notes from "@/assets/essy-notes.jpg";
import productLabIcon from "@/assets/product-lab-icon-new.png";
import { WhyNotBuildCard } from "@/components/enigma/WhyNotBuildCard";

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
  "premium-card group relative flex flex-col overflow-hidden rounded-[28px] transition-all duration-500 hover:-translate-y-1";

/* Section ------------------------------------------------------------ */

export function BentoGrid() {
  return (
    <section id="resources" className="px-4 pb-14 pt-0 sm:px-8 sm:pb-20">
      <motion.div
        variants={gridStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 md:grid-rows-[235px_235px_auto] lg:grid-cols-12 lg:grid-rows-[235px_235px]"
      >
        {/* ---------- Why Not Build? — dark anchor, tall left ---------- */}
        <motion.div variants={cardReveal} className="order-1 flex md:row-span-2 lg:col-span-4">
          <div className="flex w-full items-center justify-center py-2 lg:py-0">
            <WhyNotBuildCard />
          </div>
        </motion.div>

        {/* ---------- Tools & Templates ---------- */}
        <motion.div variants={cardReveal} className="order-2 flex lg:col-span-5">
          <article id="tools-and-templates" className={`${cardBase} resource-card w-full scroll-mt-24 p-7 ring-1 ring-ink/10`}>
            <div className="relative z-10 flex min-h-[179px] w-[58%] min-w-0 flex-1 flex-col justify-between sm:w-[54%]">
                <div>
                  <Kicker className="text-ink/55">Free kits & files</Kicker>
                  <h3 className="mt-3 text-[24px] font-medium leading-tight tracking-[-0.8px] text-ink lg:text-[26px]">
                    Tools & Templates
                  </h3>
                  <p className="mt-2.5 max-w-[24ch] text-[13px] leading-relaxed text-ink/65">
                    Practical files for clearer, faster work.
                  </p>
                </div>

                <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-ink/35 bg-paper/70 px-5 py-2.5 text-[13px] font-medium text-ink transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                  Browse the kits
                </span>
            </div>

            {/* Three portrait tiles rise from the bottom edge, like a loose hand of cards. */}
            <div className="pointer-events-none absolute -bottom-[14%] right-[-3%] h-[104%] w-[48%] sm:right-[1%] sm:w-[46%]">
              {[
                { src: phone, left: "2%", top: "12%", rotate: -10, zIndex: 1 },
                { src: slide, left: "32%", top: "3%", rotate: 3, zIndex: 3 },
                { src: notes, left: "61%", top: "17%", rotate: 13, zIndex: 2 },
              ].map((card, index) => (
                <motion.img
                  key={card.src}
                  src={card.src}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  initial={{ y: 44, rotate: 0, opacity: 0 }}
                  whileInView={{ y: 0, rotate: card.rotate, opacity: 1 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ delay: 0.25 + index * 0.1, duration: 0.75, ease: EASE }}
                  style={{ left: card.left, top: card.top, zIndex: card.zIndex }}
                  className="absolute h-[88%] w-[48%] rounded-[14px] border-2 border-paper object-cover shadow-[0_20px_38px_-18px_color-mix(in_oklab,var(--color-ink)_55%,transparent)]"
                />
              ))}
              <motion.span
                initial={{ scale: 0.65, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ delay: 0.68, duration: 0.5, ease: EASE }}
                className="absolute left-[43%] top-[52%] z-10 grid aspect-square w-[25%] place-items-center rounded-full bg-ink text-butter shadow-lg ring-2 ring-paper"
              >
                <Layers size={14} />
              </motion.span>
            </div>
          </article>
        </motion.div>

        {/* ---------- portrait → about ---------- */}
        <motion.div variants={cardReveal} className="order-5 flex md:min-h-[235px] lg:order-3 lg:col-span-3">
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
            <div className="h-64 lg:h-full" />
          </a>
        </motion.div>

        {/* ---------- courses — the serif accent card ---------- */}
        <motion.div variants={cardReveal} className="order-4 flex md:min-h-[235px] lg:col-span-3">
          <article id="classroom" className={`${cardBase} w-full scroll-mt-24 justify-between bg-sage-soft p-7`}>
            <div>
              <Kicker className="text-ink/45">Courses & certifications</Kicker>
              <h3 className="mt-3 font-serif text-[34px] italic leading-none tracking-tight text-ink">
                the classroom
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-ink/70 lg:max-w-[26ch]">
                Courses I'm building, the ones I've curated, and the certifications
                earned along the way.
              </p>
            </div>
            <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-ink/25 px-5 py-2.5 text-[13px] font-medium text-ink transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
              Enter the classroom
            </span>
          </article>
        </motion.div>

        {/* ---------- Research Vault ---------- */}
        <motion.div variants={cardReveal} className="order-3 flex lg:order-5 lg:col-span-5">
          <article id="research-vault" className={`${cardBase} resource-card resource-card-vault min-h-[235px] w-full scroll-mt-24 p-7 ring-1 ring-ink/10 lg:min-h-0`}>
            <div className="relative z-10 max-w-[62%]">
              <Kicker className="text-ink/45">Teardowns & case studies</Kicker>
              <h3 className="mt-3 text-[26px] font-medium leading-tight tracking-[-0.8px] text-ink">
                Research Vault
              </h3>
              <p className="mt-2.5 max-w-[25ch] text-[13px] leading-relaxed text-ink/65">
                Sharp evidence for better decisions.
              </p>
            </div>
            {/* spacer keeps a minimum gap while pushing the button to the bottom */}
            <div className="min-h-5 flex-1" />
            <span className="relative z-10 mb-0 inline-flex w-fit items-center gap-2 rounded-full border border-ink/35 bg-paper/70 px-5 py-2.5 text-[13px] font-medium text-ink transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white">
              Open the Vault
            </span>
            <img
              src={productLabIcon}
              alt=""
              aria-hidden
              loading="lazy"
              width={1024}
              height={1024}
              className="pointer-events-none absolute bottom-0 right-0 h-[92%] w-auto max-w-[46%] select-none object-contain object-right-bottom drop-shadow-[0_24px_44px_rgba(17,17,17,0.18)] transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:rotate-2"
            />
          </article>
        </motion.div>
      </motion.div>
    </section>
  );
}
