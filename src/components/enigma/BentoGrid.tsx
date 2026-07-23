import { ArrowUpRight, Plus, Layers, Globe } from "lucide-react";
import reading from "@/assets/essy-reading.jpg";
import laptopDash from "@/assets/essy-laptop-dash.jpg";
import portrait from "@/assets/essy-portrait.jpg";

export function BentoGrid() {
  return (
    <section className="px-4 py-6 sm:px-8 sm:py-10">
      <div className="mx-auto grid max-w-6xl auto-rows-[minmax(0,1fr)] grid-cols-6 gap-3 sm:gap-4 md:h-[calc(100vh-140px)] md:max-h-[820px] md:min-h-[560px]">
        {/* 1. portrait reading — tall left */}
        <div className="col-span-3 row-span-2 overflow-hidden rounded-3xl bg-paper-tint md:col-span-2">
          <img src={reading} alt="Essy reading" className="h-full w-full object-cover" loading="lazy" />
        </div>

        {/* 2. Tools & Templates */}
        <div className="col-span-3 flex flex-col justify-between rounded-3xl bg-paper p-5 ring-1 ring-hairline md:col-span-2">
          <div>
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#dff0d0] text-ink">
              <Layers size={14} />
            </span>
            <h3 className="mt-3 text-[15px] font-medium tracking-tight">Tools & Templates</h3>
            <p className="mt-1 text-[11.5px] leading-relaxed text-muted-ink">
              Notion systems, Figma files, and checklists.
            </p>
          </div>
          <div className="mt-3 flex items-end justify-between">
            <div>
              <div className="text-[28px] font-medium leading-none tracking-tight">20+</div>
              <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-ink">Ready to use</div>
            </div>
            <button className="inline-flex items-center gap-1 rounded-full bg-[#c9e5b8] px-3 py-1.5 text-[11px] font-medium text-ink">
              Explore <ArrowUpRight size={11} />
            </button>
          </div>
        </div>

        {/* 3. The Product Lab — wide top right */}
        <div className="col-span-6 flex flex-col justify-between rounded-3xl bg-paper-soft p-5 ring-1 ring-hairline md:col-span-2">
          <div>
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-butter text-ink">
              <Plus size={14} />
            </span>
            <h3 className="mt-3 text-[15px] font-medium tracking-tight">The Product Lab</h3>
            <p className="mt-1 text-[11.5px] leading-relaxed text-muted-ink">
              Product thinking, opportunity finding, and teardowns of products in the wild.
            </p>
          </div>
          <div className="mt-3 overflow-hidden rounded-2xl">
            <img src={laptopDash} alt="" className="h-24 w-full object-cover" loading="lazy" />
          </div>
          <button className="mt-3 inline-flex w-fit items-center gap-1 rounded-full bg-ink px-3 py-1.5 text-[11px] font-medium text-white">
            Explore <ArrowUpRight size={11} />
          </button>
        </div>

        {/* 4. The Rabbit Hole */}
        <div className="col-span-3 flex flex-col justify-between rounded-3xl bg-paper p-5 ring-1 ring-hairline md:col-span-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-butter px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink">
              ✦ The Rabbit Hole
            </span>
            <h3 className="mt-3 text-[15px] font-medium leading-tight tracking-tight">
              Every issue starts with a product.
            </h3>
            <p className="mt-1 text-[11.5px] leading-relaxed text-muted-ink">
              Where it ends is anyone's guess. Follow the trail into the stories hiding in plain sight.
            </p>
          </div>
          <button className="mt-3 inline-flex w-fit items-center gap-1 rounded-full bg-[#c9e5b8] px-3 py-1.5 text-[11px] font-medium text-ink">
            Fall in <ArrowUpRight size={11} />
          </button>
        </div>

        {/* 5. resources — center big */}
        <div className="col-span-3 flex flex-col items-center justify-center rounded-3xl bg-[#dfeecc] p-6 text-center md:col-span-2">
          <h3
            className="font-serif italic leading-none tracking-tight text-ink"
            style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 400 }}
          >
            resources
          </h3>
          <p className="mt-2 max-w-[26ch] text-[11.5px] leading-relaxed text-ink/70">
            The stack, the swipe file, and the reads I'd hand a younger me.
          </p>
        </div>

        {/* 6. portrait right — same row height */}
        <div className="relative col-span-3 overflow-hidden rounded-3xl bg-paper-tint md:col-span-2">
          <img src={portrait} alt="Essy" className="h-full w-full object-cover" loading="lazy" />
          <span className="absolute left-3 top-3 grid h-8 w-8 place-items-center rounded-xl bg-[#c9e5b8] text-ink">
            <Globe size={14} />
          </span>
        </div>
      </div>
    </section>
  );
}