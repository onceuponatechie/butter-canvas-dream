import { ArrowUpRight } from "lucide-react";
import croissant from "@/assets/emoji-croissant.png";
import heart from "@/assets/emoji-heart.png";

export function Hero() {
  return (
    <section className="relative px-4 pb-16 pt-10 sm:px-10 sm:pb-24 sm:pt-16 md:px-16">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-6 grid h-9 w-9 place-items-center rounded-full bg-butter text-[10px] font-medium text-ink/70">
          hi
        </div>
        <h1 className="text-[clamp(34px,6vw,68px)] font-medium leading-[1.05] tracking-tight text-ink">
          Products, people, and the{" "}
          <span className="inline-flex -mb-1 h-[0.9em] w-[0.9em] translate-y-1 items-center justify-center align-middle">
            <img src={heart} alt="" className="h-full w-full object-contain" />
          </span>{" "}
          stories between{" "}
          <span className="inline-flex -mb-1 h-[0.9em] w-[0.9em] translate-y-1 items-center justify-center align-middle">
            <img src={croissant} alt="" className="h-full w-full object-contain" />
          </span>{" "}
          them.
        </h1>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button className="inline-flex items-center gap-1.5 rounded-full bg-[#c9e5b8] px-5 py-2.5 text-[13px] font-medium text-ink">
            Latest work <ArrowUpRight size={14} />
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-white/60 px-5 py-2.5 text-[13px] font-medium text-ink">
            Work with me <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}