import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Mail, MapPin, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/enigma/ContactForm";
import { Nav } from "@/components/enigma/Nav";
import { Footer } from "@/components/enigma/TouchBand";
import { Reveal, TypeWords } from "@/components/enigma/Reveal";
import portrait from "@/assets/essy-portrait.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Start a conversation — Essy Udeme" },
      { name: "description", content: "Bring Essy Udeme a messy product question, a narrative that needs shape, or a digital idea ready to test." },
      { property: "og:title", content: "Start a conversation — Essy Udeme" },
      { property: "og:description", content: "Research-led product work for ambitious questions, clear narratives, and testable digital experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const fit = ["A question that needs evidence", "A story that needs structure", "An idea that needs to become tangible"];

function ContactPage() {
  return (
    <div className="min-h-screen bg-backdrop">
      <main className="site-artwork relative mx-auto w-full max-w-[1440px] overflow-x-clip">
        <Nav />
        <section className="px-4 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20">
          <div className="mx-auto max-w-6xl">
            <Reveal dir="down">
              <Link to="/" className="inline-flex items-center gap-2 text-[12px] font-medium text-ink/55 transition-colors hover:text-ink">
                <ArrowLeft size={14} /> Back to the work
              </Link>
            </Reveal>

            <div className="mt-12 grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
              <div className="min-w-0">
                <Reveal dir="up">
                  <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-paper/65 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/55 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-sage" /> Open to thoughtful work
                  </span>
                  <h1 className="mt-6 max-w-[11ch] text-[clamp(43px,6vw,76px)] font-normal leading-[0.98] tracking-tight text-ink">
                    Bring me the <span className="font-serif italic">messy question.</span>
                  </h1>
                  <p className="mt-6 max-w-[42ch] text-[15px] leading-[1.75] text-ink/62">
                    <TypeWords text="The most interesting work rarely arrives neatly packaged. Tell me what you’re trying to understand, communicate, or make real." delay={0.15} step={0.025} />
                  </p>
                </Reveal>

                <Reveal dir="up" delay={0.12} className="mt-10 overflow-hidden rounded-[28px] border border-paper/50 bg-ink p-3 shadow-[0_34px_70px_-38px_rgba(17,17,17,0.65)]">
                  <div className="relative aspect-[5/4] overflow-hidden rounded-[21px]">
                    <img src={portrait} alt="Essy Udeme" className="absolute inset-0 h-full w-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-paper">
                      <div><p className="text-[10px] uppercase tracking-[0.16em] text-paper/55">Working from</p><p className="mt-1 text-[14px] font-medium">Lagos, thinking everywhere.</p></div>
                      <MapPin size={18} className="text-sage" />
                    </div>
                  </div>
                </Reveal>

                <Reveal dir="up" delay={0.18} className="mt-5 grid gap-3">
                  {fit.map((item) => <div key={item} className="flex items-center gap-3 rounded-[16px] border border-ink/8 bg-paper/55 px-4 py-3 text-[12px] text-ink/65 backdrop-blur-sm"><Sparkles size={13} className="shrink-0 text-sage" />{item}</div>)}
                </Reveal>

                <Reveal dir="up" delay={0.24} className="mt-8">
                  <a href="mailto:hi@essyudeme.com" className="group inline-flex items-center gap-3 text-[13px] font-medium text-ink">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-paper shadow-sm ring-1 ring-ink/10"><Mail size={15} /></span>
                    hi@essyudeme.com <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </Reveal>
              </div>

              <Reveal dir="up" delay={0.1} className="lg:pt-16">
                <div className="mb-5 flex items-end justify-between gap-4 px-1">
                  <div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-ink">Start here</p><h2 className="mt-2 text-[25px] font-medium tracking-tight text-ink">Give me the shape of it.</h2></div>
                  <span className="hidden font-serif text-[42px] italic text-sage sm:block">01</span>
                </div>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}