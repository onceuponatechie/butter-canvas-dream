import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sprout } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/enigma/Reveal";
import currentRead from "@/assets/current-read.jpg";
import springRead from "@/assets/read-spring.jpg";
import winterRead from "@/assets/read-winter.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;

const readingNotes = [
  {
    eyebrow: "Currently reading",
    title: "Wealth, Luck, and Happiness",
    copy: "A quiet study of what enough can look like — beyond accumulation.",
    image: true,
  },
  {
    eyebrow: "A thought in the margin",
    title: "Luck rewards motion.",
    copy: "Not constant motion. The kind that keeps creating more surfaces for possibility to land on.",
    image: false,
  },
  {
    eyebrow: "A line worth keeping",
    title: "“Happiness is not a station you arrive at, but a manner of travelling.”",
    copy: "The book keeps returning to the life built along the way.",
    image: false,
  },
] as const;

function CurrentRead() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((value) => (value + 1) % readingNotes.length),
      4800,
    );
    return () => window.clearInterval(timer);
  }, []);

  const move = (direction: number) => {
    setActive((value) => (value + direction + readingNotes.length) % readingNotes.length);
  };

  const note = readingNotes[active];

  return (
    <article className="premium-card relative h-full min-h-[360px] overflow-hidden rounded-[28px] bg-paper ring-1 ring-ink/[0.06]">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 26 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -26 }}
          transition={{ duration: 0.5, ease: EASE }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            if (info.offset.x < -45) move(1);
            if (info.offset.x > 45) move(-1);
          }}
          className="absolute inset-0 flex cursor-grab flex-col p-7 active:cursor-grabbing"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-ink">{note.eyebrow}</p>
          <h3 className={`mt-5 max-w-[15ch] text-[25px] font-medium leading-[1.08] text-ink ${active === 2 ? "font-serif italic" : ""}`}>
            {note.title}
          </h3>
          <p className="mt-3 max-w-[27ch] text-[12.5px] leading-relaxed text-ink/60">{note.copy}</p>
          {note.image ? (
            <img
              src={currentRead}
              alt="Wealth, Luck, and Happiness beside a goldfish bowl"
              loading="lazy"
              width={1024}
              height={1280}
              className="absolute inset-x-0 bottom-0 h-[54%] w-full object-cover object-[center_62%]"
            />
          ) : (
            <div className="mt-auto flex items-end justify-between border-t border-ink/10 pt-5">
              <span className="max-w-[20ch] text-[10px] uppercase tracking-[0.14em] text-muted-ink">From my reading notes</span>
              <span className="font-serif text-[54px] italic leading-none text-sage">{String(active + 1).padStart(2, "0")}</span>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-5 right-5 z-40 flex gap-1.5">
        <Button variant="outline" size="icon" type="button" aria-label="Previous reading note" onClick={() => move(-1)} className="h-8 w-8 rounded-full border-ink/10 bg-paper/90">
          <ArrowLeft size={13} />
        </Button>
        <Button variant="outline" size="icon" type="button" aria-label="Next reading note" onClick={() => move(1)} className="h-8 w-8 rounded-full border-ink/10 bg-paper/90">
          <ArrowRight size={13} />
        </Button>
      </div>
      <div className="absolute bottom-5 left-7 z-40 flex gap-1.5">
        {readingNotes.map((item, index) => (
          <button
            key={item.eyebrow}
            type="button"
            aria-label={`Show reading note ${index + 1}`}
            aria-current={active === index}
            onClick={() => setActive(index)}
            className={`h-1.5 rounded-full transition-all ${active === index ? "w-5 bg-ink" : "w-1.5 bg-ink/20"}`}
          />
        ))}
      </div>
    </article>
  );
}

export function PersonalBuilds() {
  return (
    <section id="now" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal dir="up" className="mb-9 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-ink">The personal build</p>
          <h2 className="mt-3 text-[clamp(30px,4vw,48px)] font-medium leading-tight text-ink">
            What I’m reading, testing, and <span className="font-serif italic">becoming.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-rows-[150px_360px_116px]">
          <Reveal dir="up" className="premium-card overflow-hidden rounded-[28px] bg-paper p-5 ring-1 ring-ink/[0.06]">
            <article className="flex h-full flex-col">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-ink">Previous reads</p>
              <div className="mt-4 grid flex-1 grid-cols-2 gap-3">
                {[
                  { name: "Spring", image: springRead },
                  { name: "Winter", image: winterRead },
                ].map((read) => (
                  <div key={read.name} className="relative overflow-hidden rounded-[18px]">
                    <img src={read.image} alt="" aria-hidden loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/55 to-transparent px-3 pb-2.5 pt-8 text-[10px] font-medium text-paper">{read.name}</span>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal dir="up" delay={0.06} className="premium-card overflow-hidden rounded-[28px] bg-playlist ring-1 ring-ink/[0.06]">
            <article className="h-full min-h-[152px]">
              <iframe
                title="Spotify working playlist"
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ?utm_source=generator&theme=0"
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="block h-full min-h-[152px] w-full border-0"
              />
            </article>
          </Reveal>

          <Reveal dir="up" delay={0.08} className="sm:row-span-1">
            <CurrentRead />
          </Reveal>

          <Reveal dir="up" delay={0.12} className="premium-card overflow-hidden rounded-[28px] bg-paper ring-1 ring-ink/[0.06]">
            <article className="relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden p-7 sm:min-h-0">
              <div className="absolute -left-[10%] -top-[34%] h-[78%] w-[120%] rounded-[50%] bg-sage-soft blur-[2px]" />
              <div className="absolute left-1/2 top-8 z-10 -translate-x-1/2 text-sage"><Sprout size={23} strokeWidth={1.5} /></div>
              <p className="relative z-10 text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-ink">Currently building</p>
              <h3 className="relative z-10 mt-3 max-w-[22ch] text-[24px] font-medium leading-[1.12] text-ink">Research that people can see, feel, and use.</h3>
              <p className="relative z-10 mt-3 text-[12px] leading-relaxed text-ink/55">A living practice of turning ambiguity into evidence and experiments.</p>
            </article>
          </Reveal>

          <Reveal dir="up" delay={0.14} className="premium-card overflow-hidden rounded-[28px] bg-paper px-6 py-5 ring-1 ring-ink/[0.06]">
            <article className="flex h-full items-center justify-between gap-5">
              <span className="text-[12px] font-medium text-ink">Build the proof before the permission.</span>
              <ArrowUpRight size={17} className="shrink-0 text-sage" />
            </article>
          </Reveal>

          <Reveal dir="up" delay={0.18} className="premium-card overflow-hidden rounded-[28px] bg-paper px-7 py-5 ring-1 ring-ink/[0.06]">
            <article className="flex h-full items-center justify-between gap-5">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-ink">Question in progress</p>
                <p className="mt-2 max-w-[28ch] text-[16px] font-medium leading-snug text-ink">What becomes possible when curiosity gets structure?</p>
              </div>
              <span className="font-serif text-[42px] italic text-sage">?</span>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}