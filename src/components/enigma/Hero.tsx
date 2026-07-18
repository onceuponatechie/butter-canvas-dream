import { ArrowUpRight, X, Share2 } from "lucide-react";
import prod2 from "@/assets/prod-2.jpg";
import avatar from "@/assets/avatar.jpg";
import { SpiralBackground } from "./SpiralBackground";

export function Hero() {
  return (
    <section className="relative min-h-[86vh] overflow-hidden px-4 pt-8 sm:px-10 sm:pt-12 md:px-16">
      {/* background funnel */}
      <div className="pointer-events-none absolute inset-0">
        <SpiralBackground />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0) 30%, rgba(255,255,255,0.85) 85%)",
          }}
        />
      </div>

      {/* top-right micro copy */}
      <div className="absolute right-4 top-20 hidden text-right text-[12px] leading-relaxed text-muted-ink sm:right-10 sm:top-28 sm:block md:right-16 md:top-32">
        Advantages Delivered,
        <br />
        Promises Kept:
        <br />
        Your Ongoing Success.
      </div>

      {/* left content */}
      <div className="relative z-10 mt-16 max-w-3xl sm:mt-24">
        <div className="mb-6 flex gap-2 sm:mb-8">
          <button className="rounded-full bg-butter px-5 py-2.5 text-[13px] font-medium text-ink">
            Get Started
          </button>
          <button className="rounded-full border border-black/15 bg-white/60 px-5 py-2.5 text-[13px] font-medium text-ink">
            Explore
          </button>
        </div>
        <h1 className="text-[clamp(32px,7vw,76px)] font-medium leading-[1.05] tracking-tight text-ink">
          AI Powered Tech Solutions
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>For Your Business
        </h1>
      </div>

      {/* static cards row — bottom center */}
      <div className="relative z-10 mt-10 flex flex-wrap items-end justify-center gap-3 pb-10 sm:mt-16 sm:gap-5">
        <div className="relative rounded-2xl bg-white p-4 pr-8 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          <button className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-black/5">
            <X size={10} />
          </button>
          <div className="mb-2 text-[11px] font-medium leading-tight">
            Explore
            <br />
            Your Data
          </div>
          <div className="flex items-end gap-1">
            {[10, 18, 14, 22, 26].map((h, i) => (
              <div
                key={i}
                className="w-2 rounded-full bg-ink"
                style={{ height: h }}
              />
            ))}
          </div>
        </div>

        <div className="relative h-28 w-40 overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          <img src={prod2} alt="" className="h-full w-full object-cover" />
          <button className="absolute -bottom-2 -right-2 grid h-9 w-9 place-items-center rounded-full bg-ink text-white">
            <ArrowUpRight size={14} />
          </button>
        </div>

        <div className="hidden items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:flex">
          <img
            src={avatar}
            alt=""
            className="h-7 w-7 rounded-full object-cover"
          />
          <span className="text-[12px] font-medium">Read The Interview</span>
          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
        </div>
      </div>

      {/* right butter revenue card */}
      <div className="relative z-10 mx-auto -mt-4 w-56 rounded-2xl bg-butter p-5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] sm:absolute sm:bottom-16 sm:right-6 sm:mx-0 md:right-16">
        <div className="mb-2 flex items-start justify-between">
          <div className="text-[12px] font-medium leading-tight">
            Increased
            <br />
            Revenue
          </div>
          <Share2 size={14} className="text-ink/60" />
        </div>
        <div className="mb-4 text-[40px] font-medium leading-none tracking-tight">
          20%
        </div>
        <div className="flex items-center gap-2">
          {["01", "02", "03"].map((n, i) => (
            <div
              key={n}
              className={`grid h-8 w-8 place-items-center rounded-full text-[11px] font-medium ${
                i === 1
                  ? "bg-ink text-white"
                  : "border border-ink/20 text-ink"
              }`}
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}