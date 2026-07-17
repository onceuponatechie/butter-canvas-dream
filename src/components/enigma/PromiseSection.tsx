import { TrendingUp, Play, Share2, HelpCircle, User } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import prod1 from "@/assets/prod-1.jpg";
import prod2 from "@/assets/prod-2.jpg";
import { useCountUp } from "./useCountUp";

export function PromiseSection() {
  return (
    <section className="relative px-8 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-[clamp(34px,4.5vw,60px)] font-medium leading-[1.1] tracking-tight">
          <span className="inline-flex items-center gap-2">
            Advantage
            <span className="inline-flex -space-x-2 align-middle">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-butter">
                <TrendingUp size={16} className="text-emerald-700" />
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-ink text-white">
                <Play size={14} fill="white" />
              </span>
            </span>
            Is Our Promise:
          </span>
          <br />
          Fueling Your Success
        </h2>
        <div className="mt-8 flex justify-center gap-3">
          <button className="rounded-full bg-ink px-6 py-3 text-[13px] font-medium text-white">
            Get Started
          </button>
          <button className="rounded-full bg-black/5 px-6 py-3 text-[13px] font-medium text-ink">
            Contact Us
          </button>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl">
        <StackCard index={0} total={2}>
          <CardOne />
        </StackCard>
        <StackCard index={1} total={2}>
          <CardTwo />
        </StackCard>
      </div>

      <div className="mt-16 flex items-center justify-between text-[12px] text-muted-ink">
        <span>AI Powered</span>
        <span>• Innovate Today, Transform Tomorrow</span>
        <span className="text-right">
          Beyond Limits
          <br />
          Since 2015
        </span>
      </div>
    </section>
  );
}

function StackCard({
  children,
  index,
  total,
}: {
  children: React.ReactNode;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `${80 + index * 20}px`, zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale: index < total - 1 ? scale : 1, opacity: index < total - 1 ? opacity : 1 }}
        className="mb-8 overflow-hidden rounded-[32px] bg-butter p-10 md:p-14"
      >
        {children}
      </motion.div>
    </div>
  );
}

function CardOne() {
  const { value, ref } = useCountUp(18);
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      <div className="flex flex-col justify-between">
        <div>
          <span className="inline-block rounded-full border border-ink/20 px-3 py-1 text-[11px] font-medium">
            Increased Revenue
          </span>
          <h3 className="mt-5 text-[clamp(28px,3vw,44px)] font-medium leading-tight tracking-tight">
            Cultivating Growth,
            <br /> Maximizing Revenue
          </h3>
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-muted-ink">
            Through strategic marketing, product innovation, and operational excellence, we deliver an average increase in revenue of 25% for our clients.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="overflow-hidden rounded-3xl">
          <img src={prod1} alt="" className="h-80 w-full object-cover" loading="lazy" />
        </div>
        <div
          ref={ref}
          className="absolute -left-6 top-8 w-48 rounded-2xl bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
        >
          <div className="text-[32px] font-medium leading-none tracking-tight">
            {value}%
          </div>
          <div className="my-3 flex items-end gap-1">
            {[8, 14, 10, 20, 16, 24].map((h, i) => (
              <div key={i} className="w-1.5 rounded-full bg-ink" style={{ height: h }} />
            ))}
          </div>
          <div className="text-[11px] text-muted-ink">increase in monthly sales</div>
        </div>
        <div className="absolute -right-2 bottom-6 flex items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-white">
            <TrendingUp size={12} />
          </span>
          <span className="text-[12px] font-medium">Revenue boost of 30%</span>
          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
        </div>
      </div>
    </div>
  );
}

function CardTwo() {
  const { value, ref } = useCountUp(66);
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      <div className="flex flex-col justify-between">
        <div>
          <span className="inline-block rounded-full border border-ink/20 px-3 py-1 text-[11px] font-medium">
            Innovation Leadership
          </span>
          <h3 className="mt-5 text-[clamp(28px,3vw,44px)] font-medium leading-tight tracking-tight">
            Shaping Tomorrow
            <br /> through Innovation Today
          </h3>
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-muted-ink">
            Our clients experience a 66% higher rate of new product development, driven by our commitment to research, prototyping and creative problem-solving.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="overflow-hidden rounded-3xl">
          <img src={prod2} alt="" className="h-80 w-full object-cover" loading="lazy" />
        </div>
        <div className="absolute -left-4 top-6 text-[24px] leading-none tracking-tighter text-ink/40">···</div>
        <div ref={ref} className="absolute -right-2 top-6 w-56 rounded-2xl bg-ink p-4 text-white shadow-[0_12px_40px_rgba(0,0,0,0.14)]">
          <div className="mb-3 flex gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={`h-4 w-4 rounded-full ${
                  i < 3 ? "bg-butter" : "border border-white/40"
                }`}
              />
            ))}
          </div>
          <div className="text-[32px] font-medium leading-none tracking-tight">{value}%</div>
          <div className="mt-2 text-[11px] text-white/70">Higher rate of new product development</div>
        </div>
        <div className="absolute -bottom-3 right-3 flex gap-2">
          <button className="grid h-8 w-8 place-items-center rounded-full bg-white shadow-md">
            <HelpCircle size={13} />
          </button>
          <button className="grid h-8 w-8 place-items-center rounded-full bg-white shadow-md">
            <User size={13} />
          </button>
        </div>
        <Share2 className="hidden" />
      </div>
    </div>
  );
}