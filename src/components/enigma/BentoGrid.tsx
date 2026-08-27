import { ArrowUpRight, Plus } from "lucide-react";
import reading from "@/assets/essy-reading.jpg";
import laptopDash from "@/assets/essy-laptop-dash.jpg";
import phone from "@/assets/essy-phone.jpg";
import slide from "@/assets/essy-slide.jpg";

export function BentoGrid() {
  return (
    <section id="resources" className="px-4 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto grid max-w-6xl gap-3 sm:gap-4 md:grid-cols-3">
        {/* ---------- column 1 ---------- */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <article className="flex flex-1 flex-col justify-between overflow-hidden rounded-[28px] bg-ink p-5 text-white">
            <div>
              <div className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-[11px]">
                  ◐
                </span>
                <span className="text-[13px] font-medium">The Rabbit Hole</span>
              </div>
              <p className="mt-3 text-[12px] leading-relaxed text-white/60">
                Curious by nature. Obsessed with what's under the surface — deep dives into
                products, people, ideas, and the random rabbit holes in between.
              </p>
              <button className="mt-4 inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white">
                Explore <ArrowUpRight size={11} />
              </button>
            </div>
            <img
              src={laptopDash}
              alt="Notes and experiments from the rabbit hole"
              loading="lazy"
              className="mt-5 h-40 w-full rounded-2xl object-cover"
            />
            <div className="mt-3 text-[10px] tracking-wide text-white/40">MAY 6, THOUGHTS</div>
          </article>

          <article className="rounded-[28px] bg-sage-soft p-5">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2.5 py-1 text-[10px] font-medium text-ink">
              ✦ Kind words
            </span>
            <p className="mt-3 text-[12px] italic leading-relaxed text-ink/80">
              "Every launch with Essy leaves me smarter. She sees the seams other people miss."
            </p>
            <div className="mt-3 text-[10px] font-medium tracking-wide text-muted-ink">
              — MAYA O., PM AT NORTHWIND
            </div>
          </article>
        </div>

        {/* ---------- column 2 ---------- */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <article className="flex flex-1 flex-col justify-between rounded-[28px] bg-card p-5 ring-1 ring-black/5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="max-w-[10ch] text-[26px] font-medium leading-[1.1] tracking-tight text-ink">
                Tools &amp; Templates
              </h3>
              <ArrowUpRight size={20} className="mt-1 shrink-0 text-ink" />
            </div>
            <img
              src={phone}
              alt="Notion, Figma and code templates"
              loading="lazy"
              className="mt-4 h-36 w-full rounded-2xl object-cover"
            />
            <div className="mt-4 flex flex-wrap items-center gap-2 text-[10px] font-medium text-ink/60">
              <span className="rounded-full bg-black/5 px-2.5 py-1">✦ Notion</span>
              <span className="rounded-full bg-black/5 px-2.5 py-1">◐ Figma</span>
              <span className="rounded-full bg-black/5 px-2.5 py-1">20+ kits</span>
              <button className="ml-auto inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1.5 text-[11px] text-white">
                Follow <Plus size={11} />
              </button>
            </div>
          </article>

          <article className="flex flex-col items-center justify-center rounded-[28px] bg-sage-soft px-6 py-10 text-center">
            <h3 className="font-serif text-[38px] italic leading-none tracking-tight text-ink sm:text-[46px]">
              resources
            </h3>
            <p className="mt-3 max-w-[26ch] text-[11px] leading-relaxed text-ink/70">
              The stack, the file, and the reads I'd hand a younger me.
            </p>
          </article>
        </div>

        {/* ---------- column 3 ---------- */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <article className="flex flex-1 flex-col justify-between rounded-[28px] bg-card p-5 ring-1 ring-black/5">
            <div>
              <h3 className="max-w-[9ch] text-[30px] font-medium leading-[1.05] tracking-tight text-ink">
                The Product Lab
              </h3>
              <p className="mt-3 max-w-[34ch] text-[12px] leading-relaxed text-muted-ink">
                Teardowns, case studies, and behind-the-scenes breakdowns of products worth
                studying.
              </p>
            </div>
            <img
              src={slide}
              alt="Product teardowns and case studies"
              loading="lazy"
              className="mt-5 h-36 w-full rounded-2xl object-cover"
            />
            <button className="mt-4 inline-flex w-fit items-center gap-1 rounded-full border border-ink/15 px-3 py-1.5 text-[11px] font-medium">
              Read on <ArrowUpRight size={11} />
            </button>
          </article>

          <div className="overflow-hidden rounded-[28px]">
            <img
              src={reading}
              alt="Essy reading"
              loading="lazy"
              className="h-56 w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* closing line */}
      <div className="mx-auto mt-14 max-w-3xl text-center">
        <p className="text-[clamp(20px,3vw,34px)] font-normal leading-snug tracking-tight text-ink">
          Making{" "}
          <span className="inline-block h-8 w-12 overflow-hidden rounded-xl align-middle">
            <img src={reading} alt="" aria-hidden className="h-full w-full object-cover" />
          </span>{" "}
          <span className="inline-block h-8 w-12 overflow-hidden rounded-xl align-middle">
            <img src={slide} alt="" aria-hidden className="h-full w-full object-cover" />
          </span>{" "}
          things is how I make
          <br className="hidden sm:block" /> sense of the world
        </p>
      </div>
    </section>
  );
}
