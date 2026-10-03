import { ArrowUpRight } from "lucide-react";
import { Reveal, TypeWords } from "@/components/enigma/Reveal";
import researchIcon from "@/assets/service-research.png";
import narrativesIcon from "@/assets/service-narratives.png";
import prototypesIcon from "@/assets/service-prototypes.png";

const practices = [
  {
    number: "01",
    title: "Research & Insight",
    icon: researchIcon,
    summary: "Find the signal inside the noise.",
    items: ["Market & product research", "User & competitor research", "Research synthesis", "Opportunity & trend research", "Reports & briefs"],
    tone: "bg-stone",
  },
  {
    number: "02",
    title: "Decks & Narratives",
    icon: narrativesIcon,
    summary: "Give complex thinking a clear shape.",
    items: ["Pitch & strategy decks", "Research presentations", "Product narratives", "Visual reports", "Story & message structure"],
    tone: "bg-lavender-soft",
  },
  {
    number: "03",
    title: "Prototypes & Digital Experiences",
    icon: prototypesIcon,
    summary: "Make the idea real enough to test.",
    items: ["High-fidelity mobile prototypes", "Product concepts", "Landing pages & websites", "Dashboards & research outputs", "Lightweight tools"],
    tone: "bg-sage-soft",
  },
] as const;

export function PracticeSection() {
  return (
    <section id="practice" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-[0.82fr_1.18fr] md:items-end">
          <Reveal dir="up">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-ink">How I can help</p>
            <h2 className="mt-4 max-w-[12ch] text-[clamp(32px,4.2vw,54px)] font-medium leading-[1.02] tracking-tight text-ink">
              From messy question to <span className="font-serif italic">something real.</span>
            </h2>
          </Reveal>
          <Reveal dir="up" delay={0.08} className="md:justify-self-end">
            <p className="max-w-[48ch] text-[15px] leading-[1.7] text-ink/65">
              <TypeWords
                delay={0.12}
                step={0.025}
                text="Research-led product work that turns unclear questions into useful insight, compelling narratives, and testable digital experiences."
              />
            </p>
          </Reveal>
        </div>

        <div className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          {practices.map((practice, index) => (
            <Reveal
              key={practice.title}
              dir="up"
              delay={index * 0.08}
              className="premium-card min-w-[calc(100vw-2rem)] snap-center overflow-hidden rounded-[26px] border border-ink/10 bg-paper md:min-w-0"
            >
              <article className="flex min-h-[590px] flex-col">
                <div className={`relative h-[230px] overflow-hidden border-b border-ink/10 p-7 ${practice.tone}`}>
                  <span className="text-[10px] font-semibold tracking-[0.16em] text-ink/45">{practice.number}</span>
                  <img
                    src={practice.icon}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="absolute -bottom-8 right-0 h-[210px] w-[210px] object-contain drop-shadow-[0_24px_24px_rgba(17,17,17,0.17)] transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:rotate-2"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="max-w-[14ch] text-[25px] font-medium leading-[1.08] tracking-tight text-ink">{practice.title}</h3>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/15 text-ink">
                      <ArrowUpRight size={15} aria-hidden />
                    </span>
                  </div>
                  <p className="mt-4 text-[13px] leading-relaxed text-ink/60">{practice.summary}</p>
                  <ul className="mt-7 space-y-3 border-t border-ink/10 pt-6">
                    {practice.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[12.5px] leading-snug text-ink/72">
                        <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-sage" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-1 text-center text-[10px] uppercase tracking-[0.16em] text-muted-ink md:hidden">Swipe to explore</p>
      </div>
    </section>
  );
}