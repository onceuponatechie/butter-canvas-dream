import { HelpCircle, User, Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import c1 from "@/assets/case-1.jpg";
import c2 from "@/assets/case-2.jpg";
import c3 from "@/assets/case-3.jpg";
import c4 from "@/assets/case-4.jpg";

const baseCases = [
  { img: c1, label: "E-commerce Optimization" },
  { img: c4, label: "Manufacturing Efficiency" },
  { img: c3, label: "Restaurant Turnaround" },
  { img: c2, label: "Financial Services Strategy" },
];

const extraCases = [
  { img: c2, label: "SaaS Growth Playbook" },
  { img: c3, label: "Hospitality Rebrand" },
  { img: c1, label: "Retail Automation" },
  { img: c4, label: "Logistics Intelligence" },
];

export function CasesSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-8 sm:py-24">
      {/* watermark */}
      <div
        className="pointer-events-none absolute inset-x-0 top-4 whitespace-nowrap text-center font-medium leading-none tracking-tight"
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

      <div className="relative z-10 mx-auto mt-32 max-w-6xl sm:mt-40">
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
          {baseCases.map((c) => (
            <CaseCard key={c.label} {...c} />
          ))}
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-5 sm:gap-5 md:grid-cols-4">
                {extraCases.map((c, i) => (
                  <motion.div
                    key={c.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                  >
                    <CaseCard {...c} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 sm:mt-14">
          <span className="text-[13px] text-muted-ink">
            {expanded ? "Showing 8 cases" : "Showing 4 cases"}
          </span>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-[13px] font-medium text-white transition hover:opacity-90"
          >
            {expanded ? (
              <>
                <Minus size={14} /> Show Less
              </>
            ) : (
              <>
                <Plus size={14} /> All Works
              </>
            )}
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

function CaseCard({ img, label }: { img: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="mb-2 text-[11px] text-muted-ink sm:text-[12px]">
        {label}
      </span>
      <div className="overflow-hidden rounded-2xl">
        <img
          src={img}
          alt={label}
          className="h-[160px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[220px]"
          loading="lazy"
        />
      </div>
    </div>
  );
}