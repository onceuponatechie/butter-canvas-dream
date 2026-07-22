import { ArrowUpRight, Plus } from "lucide-react";
import reading from "@/assets/essy-reading.jpg";
import laptopDash from "@/assets/essy-laptop-dash.jpg";
import portrait from "@/assets/essy-portrait.jpg";

export function BentoGrid() {
  return (
    <section className="px-4 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {/* portrait reading */}
        <div className="col-span-1 overflow-hidden rounded-3xl">
          <img src={reading} alt="Essy reading" className="h-full w-full object-cover" loading="lazy" />
        </div>

        {/* tools & templates */}
        <div className="col-span-1 flex flex-col justify-between rounded-3xl bg-[#dff0d0] p-5">
          <div>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2.5 py-1 text-[10px] font-medium text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" /> Tools & Templates
            </span>
            <p className="mt-3 text-[12px] leading-relaxed text-muted-ink">
              Handmade Notion, Figma & code kits I ship weekly.
            </p>
          </div>
          <div className="mt-4">
            <div className="text-[38px] font-medium leading-none tracking-tight">20+</div>
            <button className="mt-3 inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1.5 text-[11px] font-medium text-white">
              Follow <Plus size={11} />
            </button>
          </div>
        </div>

        {/* laptop dash — spans 2 */}
        <div className="col-span-2 overflow-hidden rounded-3xl bg-butter-deep">
          <img src={laptopDash} alt="" className="h-56 w-full object-cover sm:h-64" loading="lazy" />
        </div>

        {/* product lab */}
        <div className="col-span-2 flex flex-col justify-between rounded-3xl bg-white p-5 ring-1 ring-black/5 md:col-span-1">
          <div>
            <span className="inline-flex items-center gap-1 rounded-full bg-butter px-2.5 py-1 text-[10px] font-medium text-ink">
              The Product Lab
            </span>
            <p className="mt-3 text-[12px] leading-relaxed text-muted-ink">
              A living notebook of experiments, teardowns, and prototypes.
            </p>
          </div>
          <button className="mt-4 inline-flex w-fit items-center gap-1 rounded-full border border-ink/15 px-3 py-1.5 text-[11px] font-medium">
            Read on <ArrowUpRight size={11} />
          </button>
        </div>

        {/* tiny testimonial */}
        <div className="col-span-2 rounded-3xl bg-white p-5 ring-1 ring-black/5 md:col-span-1">
          <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-butter px-2.5 py-1 text-[10px] font-medium">
            ✦ Kind words
          </div>
          <p className="text-[12px] leading-relaxed text-ink/80">
            "Every launch with Essy leaves me smarter. She sees the seams other people miss."
          </p>
          <div className="mt-3 text-[10px] font-medium tracking-wide text-muted-ink">
            — MAYA O., PM AT NORTHWIND
          </div>
        </div>

        {/* resources — big center */}
        <div className="col-span-2 flex flex-col items-center justify-center rounded-3xl bg-[#d9edc6] p-8 text-center">
          <h3 className="font-serif text-[42px] italic leading-none tracking-tight text-ink sm:text-[56px]">
            resources
          </h3>
          <p className="mt-3 max-w-[22ch] text-[12px] leading-relaxed text-ink/70">
            The stack, the swipe file, and the reads I'd hand a younger me.
          </p>
        </div>

        {/* portrait smile */}
        <div className="col-span-2 overflow-hidden rounded-3xl md:col-span-2">
          <img src={portrait} alt="Essy" className="h-64 w-full object-cover" loading="lazy" />
        </div>
      </div>

      {/* small badge row + subline */}
      <div className="mx-auto mt-14 max-w-3xl text-center">
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full bg-butter px-3 py-1 text-[11px] font-medium">✧ builder</span>
          <span className="rounded-full bg-[#dff0d0] px-3 py-1 text-[11px] font-medium">◐ writer</span>
        </div>
        <p className="text-[clamp(18px,2.2vw,26px)] font-medium leading-snug tracking-tight text-ink">
          Around here, ideas turn into websites, apps,
          <br className="hidden sm:block" /> decks, stories, & digital{" "}
          <span className="inline-flex items-center gap-1 rounded-full bg-butter px-3 py-1 text-[12px]">
            things ✦
          </span>
        </p>
      </div>
    </section>
  );
}