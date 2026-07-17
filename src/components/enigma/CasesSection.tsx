import { HelpCircle, User } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import c1 from "@/assets/case-1.jpg";
import c2 from "@/assets/case-2.jpg";
import c3 from "@/assets/case-3.jpg";
import c4 from "@/assets/case-4.jpg";

const cases = [
  { img: c1, label: "E-commerce Optimization" },
  { img: c4, label: "Manufacturing Efficiency" },
  { img: c3, label: "Restaurant Turnaround" },
  { img: c2, label: "Financial Services Strategy" },
];

export function CasesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const gap = useTransform(scrollYProgress, [0, 1], [8, 20]);

  return (
    <section ref={ref} className="relative" style={{ height: "260vh" }}>
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* watermark */}
        <div
          className="pointer-events-none absolute inset-x-0 top-6 whitespace-nowrap text-center font-medium leading-none tracking-tight"
          style={{
            fontSize: "16vw",
            background:
              "linear-gradient(90deg, #F3F8C9 0%, #F6F8E3 45%, #EBEBEB 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          OUR CASES
        </div>

        <div className="relative z-10 mt-auto mb-auto flex flex-col items-center px-8">
          <motion.div
            style={{ scale, gap }}
            className="flex items-center justify-center"
          >
            {cases.map((c, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="mb-3 text-[12px] text-muted-ink">{c.label}</span>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={c.img}
                    alt={c.label}
                    className="h-[220px] w-[260px] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative z-10 mb-8 flex items-center justify-between px-8">
          <span className="text-[13px] text-muted-ink">Scroll to explore</span>
          <button className="rounded-full bg-ink px-6 py-2.5 text-[13px] font-medium text-white">
            All Works
          </button>
          <div className="flex gap-2">
            <button className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white">
              <HelpCircle size={14} />
            </button>
            <button className="grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white">
              <User size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}