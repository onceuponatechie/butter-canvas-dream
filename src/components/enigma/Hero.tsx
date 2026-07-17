import { ArrowUpRight, X, Share2, ArrowDown } from "lucide-react";
import heroSwirl from "@/assets/hero-swirl.jpg";
import prod1 from "@/assets/prod-1.jpg";
import prod2 from "@/assets/prod-2.jpg";
import avatar from "@/assets/avatar.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden px-16 pt-12">
      {/* background swirl */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={heroSwirl}
          alt=""
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-70 blur-[2px]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0) 40%, rgba(255,255,255,0.85) 85%)",
          }}
        />
      </div>

      {/* top-right micro copy */}
      <div className="absolute right-16 top-32 text-right text-[12px] leading-relaxed text-muted-ink">
        Advantages Delivered,
        <br />
        Promises Kept:
        <br />
        Your Ongoing Success.
      </div>

      {/* left content */}
      <div className="relative z-10 mt-24 max-w-3xl">
        <div className="mb-8 flex gap-2">
          <button className="rounded-full bg-butter px-5 py-2.5 text-[13px] font-medium text-ink">
            Get Started
          </button>
          <button className="rounded-full border border-black/15 bg-white/60 px-5 py-2.5 text-[13px] font-medium text-ink">
            Explore
          </button>
        </div>
        <h1 className="text-[clamp(40px,5.5vw,76px)] font-medium leading-[1.05] tracking-tight text-ink">
          AI Powered Tech Solutions
          <br />
          For Your Business
        </h1>
      </div>

      {/* floating cards */}
      <div className="animate-floaty absolute bottom-28 left-1/2 z-10 -translate-x-[130%]">
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
      </div>

      <div
        className="animate-floaty absolute bottom-24 left-1/2 z-10 -translate-x-[10%]"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="relative h-28 w-40 overflow-hidden rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          <img src={prod2} alt="" className="h-full w-full object-cover" />
          <button className="absolute -bottom-2 -right-2 grid h-9 w-9 place-items-center rounded-full bg-ink text-white">
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>

      <div
        className="animate-floaty absolute bottom-10 left-1/2 z-10 -translate-x-[140%]"
        style={{ animationDelay: "1.2s" }}
      >
        <div className="flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
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
      <div
        className="animate-floaty absolute bottom-24 right-16 z-10 w-56 rounded-2xl bg-butter p-5 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
        style={{ animationDelay: "0.3s" }}
      >
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

      {/* scroll hint bottom-left */}
      <div className="absolute bottom-8 left-6 z-10 flex flex-col items-center gap-1">
        <div className="grid h-8 w-8 place-items-center rounded-full bg-ink text-white">
          <span className="text-[11px] font-medium">C</span>
        </div>
        <ArrowDown size={12} className="text-ink/50" />
      </div>
    </section>
  );
}