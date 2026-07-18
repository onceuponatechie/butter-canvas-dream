import { ArrowUpRight, Search, Play } from "lucide-react";
import prod1 from "@/assets/prod-1.jpg";
import prod2 from "@/assets/prod-2.jpg";
import avatar from "@/assets/avatar.jpg";

export function BentoGrid() {
  return (
    <section className="px-4 py-10 sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-3">
        {/* Mission */}
        <div className="rounded-3xl bg-butter p-6">
          <h3 className="text-[22px] font-medium tracking-tight">Mission</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-muted-ink">
            To make AI learning simple and practical so everyone can gain real
            skills.
          </p>
          <div className="mt-5 overflow-hidden rounded-2xl">
            <img
              src={prod1}
              alt=""
              className="h-40 w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {["EDUCATION", "SMART LEARNING", "CRITICAL"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink/15 bg-white/70 px-2.5 py-1 text-[10px] font-medium tracking-wide text-ink"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Teamwork */}
        <div className="rounded-3xl bg-lilac p-6">
          <h3 className="text-[22px] font-medium tracking-tight">Teamwork</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-muted-ink">
            Collaborating to design AI courses that help learners succeed
            faster.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-ink text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <Play size={16} fill="white" />
            </div>
            <div className="flex -space-x-2">
              {[avatar, avatar, avatar, avatar].map((a, i) => (
                <img
                  key={i}
                  src={a}
                  alt=""
                  className="h-8 w-8 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Study Route */}
        <div className="rounded-3xl bg-white p-6 ring-1 ring-black/5">
          <h3 className="text-[22px] font-medium tracking-tight">
            Study Route
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-muted-ink">
            A clear study path guides learners step by step to master AI skills
            quickly.
          </p>
          <div className="relative mt-6 h-40 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100 via-lime-100 to-white">
            <svg
              viewBox="0 0 200 120"
              className="absolute inset-0 h-full w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0 90 C 40 60, 80 40, 120 55 S 180 90, 200 70"
                stroke="#4a7c59"
                strokeWidth="1.5"
                fill="none"
                opacity="0.4"
              />
              <path
                d="M0 100 C 40 70, 80 50, 120 65 S 180 100, 200 80"
                stroke="#4a7c59"
                strokeWidth="1.5"
                fill="none"
                opacity="0.35"
              />
            </svg>
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2">
            <Search size={13} className="text-muted-ink" />
            <span className="text-[12px] text-muted-ink">
              Discover what to learn…
            </span>
          </div>
        </div>

        {/* Smarter Education — wide */}
        <div className="rounded-3xl bg-butter-deep p-6 md:col-span-2">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-[24px] font-medium leading-tight tracking-tight">
                  Smarter Education With AI
                  <br />
                  Made Simple
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted-ink">
                  Providing easy AI learning that helps to build real skills
                  fast and smart.
                </p>
              </div>
              <div className="mt-6 flex gap-2">
                <button className="rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white">
                  Start Learning
                </button>
                <button className="rounded-full border border-ink/20 bg-white/70 px-5 py-2.5 text-[13px] font-medium text-ink">
                  Course Plans
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={prod2}
                alt=""
                className="h-56 w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Small companion card */}
        <div className="flex flex-col justify-between rounded-3xl bg-ink p-6 text-white">
          <div>
            <span className="rounded-full border border-white/20 px-3 py-1 text-[11px] font-medium">
              Live Cohort
            </span>
            <h3 className="mt-4 text-[22px] font-medium leading-tight tracking-tight">
              Join the next AI intensive
            </h3>
          </div>
          <button className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-medium text-ink">
            Reserve seat <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}