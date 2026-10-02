import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, TypeWords } from "@/components/enigma/Reveal";
import researchIcon from "@/assets/service-research.png";
import narrativesIcon from "@/assets/service-narratives.png";
import prototypesIcon from "@/assets/service-prototypes.png";

const EASE = [0.22, 1, 0.36, 1] as const;

const practices = [
  {
    number: "01",
    title: "Research & Insight",
    description: "Find the signal inside a messy market, product, or audience question.",
    items: ["Market & product research", "User & competitor research", "Research synthesis", "Opportunity & trend briefs"],
    image: researchIcon,
    tint: "bg-sage-soft",
  },
  {
    number: "02",
    title: "Decks & Narratives",
    description: "Shape evidence into a story people can understand, remember, and act on.",
    items: ["Pitch & strategy decks", "Research presentations", "Product narratives", "Visual reports & information design"],
    image: narrativesIcon,
    tint: "bg-butter-soft",
  },
  {
    number: "03",
    title: "Prototypes & Digital Experiences",
    description: "Turn the strongest idea into something tangible enough to test and learn from.",
    items: ["High-fidelity prototypes", "Product concepts", "Landing pages & websites", "Dashboards & lightweight tools"],
    image: prototypesIcon,
    tint: "bg-lavender-soft",
  },
] as const;

export function PracticeSection() {
  return (
    <section id="practice" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 border-b border-ink/10 pb-10 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.7fr)] md:items-end">
          <Reveal dir="up">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-ink">The work, connected</span>
            <h2 className="mt-4 max-w-[13ch] text-[clamp(34px,5vw,64px)] font-normal leading-[1.02] tracking-tight text-ink">
              From messy questions to <span className="font-serif italic">things you can test.</span>
            </h2>
          </Reveal>
          <p className="max-w-[42ch] text-[14px] leading-[1.7] text-ink/65 md:justify-self-end">
            <TypeWords text="Research-led product work that turns uncertainty into clear insight, compelling narratives, and useful digital experiences." delay={0.12} step={0.025} />
          </p>
        </div>

        <div className="divide-y divide-ink/10">
          {practices.map((practice, index) => (
            <motion.article
              key={practice.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
              className="group grid gap-6 py-8 md:grid-cols-[56px_minmax(0,1.15fr)_minmax(260px,0.85fr)_132px] md:items-center md:py-10"
            >
              <span className="text-[11px] text-ink/35">{practice.number}</span>
              <div className="grid grid-cols-[minmax(0,1fr)_72px] items-center gap-4 md:flex md:min-w-0 md:items-center md:gap-6">
                <div className={`premium-card order-2 h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full ${practice.tint} md:order-1 md:h-[92px] md:w-[92px]`}>
                  <img src={practice.image} alt="" aria-hidden loading="lazy" width={768} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                </div>
                <div className="order-1 min-w-0 md:order-2">
                  <h3 className="text-[clamp(22px,2.7vw,34px)] font-medium leading-tight tracking-tight text-ink">{practice.title}</h3>
                  <p className="mt-2 max-w-[42ch] text-[13px] leading-relaxed text-ink/60">{practice.description}</p>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-x-5 gap-y-2 text-[12px] leading-snug text-ink/60 md:grid-cols-1">
                {practice.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a href="mailto:hi@essyudeme.com" aria-label={`Talk about ${practice.title}`} className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition-all group-hover:border-ink group-hover:bg-ink group-hover:text-background md:justify-self-end">
                <ArrowUpRight size={16} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}