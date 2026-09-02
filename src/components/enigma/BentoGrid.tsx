import { ArrowRight, ArrowUpRight } from "lucide-react";
import reading from "@/assets/essy-reading.jpg";
import phone from "@/assets/essy-phone.jpg";
import slide from "@/assets/essy-slide.jpg";
import notes from "@/assets/essy-notes.jpg";
import rabbitHole from "@/assets/rabbit-hole-3d.png";
import productLabCover from "@/assets/product-lab-cover.jpg.asset.json";

export function BentoGrid() {
  return (
    <section id="resources" className="px-4 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto grid max-w-6xl gap-3 sm:gap-4 md:grid-cols-12 md:grid-rows-[minmax(300px,auto)_minmax(300px,auto)]">
        {/* ---------- The Rabbit Hole (tall, left) ---------- */}
        <article className="order-1 flex flex-col overflow-hidden rounded-[28px] bg-ink p-6 text-white md:col-span-3 md:row-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-white/10 text-[13px]">
              ◐
            </span>
            <span className="text-[15px] font-medium tracking-tight">The Rabbit Hole</span>
          </div>

          <p className="mt-3 text-[12.5px] leading-relaxed text-white/60">
            Curious by nature. Obsessed with what's under the surface — deep dives into products,
            people, ideas, and the random rabbit holes in between.
          </p>

          <button className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-butter px-3.5 py-1.5 text-[11.5px] font-medium text-ink">
            Explore <ArrowUpRight size={12} />
          </button>

          <div className="relative mt-6 flex flex-1 items-end justify-center">
            <img
              src={rabbitHole}
              alt="A laptop glowing with a spiral tunnel, surrounded by floating idea cards"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-[112%] max-w-none translate-y-3 select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
            />
          </div>

          <div className="mt-4 border-t border-white/10 pt-3">
            <div className="text-[10px] uppercase tracking-[0.14em] text-white/35">Category</div>
            <div className="mt-1 text-[13px] font-medium">Blog &amp; Thoughts</div>
          </div>
        </article>

        {/* ---------- Tools & Templates ---------- */}
        <article className="group order-3 md:order-2 flex cursor-pointer flex-col justify-between overflow-hidden rounded-[28px] bg-[#f4f4f2] p-6 ring-1 ring-black/[0.04] md:col-span-4">
          <div>
            <h3 className="text-[30px] font-medium leading-[1.05] tracking-[-1.2px] text-ink transition-colors duration-500 group-hover:text-[#6b7d3a]">
              Tools &amp;
              <br />
              Templates{" "}
              <ArrowRight
                size={24}
                className="inline-block align-middle transition-transform duration-500 group-hover:translate-x-1.5"
              />
            </h3>

            {/* expanding thumbnail stack */}
            <div className="mt-5 flex items-end">
              {[phone, slide, notes].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  style={{ transitionDelay: `${i * 60}ms`, zIndex: 3 - i }}
                  className={[
                    "relative h-[78px] w-[78px] rounded-[18px] object-cover shadow-[0_12px_28px_-16px_rgba(0,0,0,0.5)] ring-2 ring-[#f4f4f2]",
                    "transition-all duration-500 [transition-timing-function:cubic-bezier(0.7,0,0.2,1)]",
                    i === 0
                      ? ""
                      : i === 1
                        ? "-ml-[60px] rotate-[4deg] group-hover:ml-1.5 group-hover:rotate-0"
                        : "-ml-[60px] rotate-[8deg] group-hover:ml-1.5 group-hover:rotate-0",
                  ].join(" ")}
                />
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-[10.5px] font-medium text-ink/55">
              <span className="rounded-full bg-black/[0.06] px-2.5 py-1">✦ Notion</span>
              <span className="rounded-full bg-black/[0.06] px-2.5 py-1">◐ Figma</span>
              <span className="rounded-full bg-black/[0.06] px-2.5 py-1">20+ kits</span>
            </div>
          </div>

          <button className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white">
            Browse the kits
            <ArrowRight
              size={16}
              className="text-butter-deep transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </article>

        {/* ---------- The Product Lab ---------- */}
        <article
          className="group order-4 md:order-3 flex cursor-pointer flex-col justify-between overflow-hidden rounded-[28px] bg-[#f4f4f2] bg-cover bg-center bg-no-repeat p-6 ring-1 ring-black/[0.04] md:col-span-5"
          style={{ backgroundImage: `url(${productLabCover.url})` }}
        >
          <div className="max-w-[56%]">
            <h3 className="text-[30px] font-medium leading-[1.05] tracking-[-1.2px] text-ink transition-colors duration-500 group-hover:text-[#6b7d3a]">
              The Product
              <br />
              Lab{" "}
              <ArrowRight
                size={24}
                className="inline-block align-middle transition-transform duration-500 group-hover:translate-x-1.5"
              />
            </h3>

            <p className="mt-3 text-[12.5px] leading-relaxed text-muted-ink">
              Teardowns, case studies, and behind-the-scenes breakdowns of products worth studying.
            </p>
          </div>

          <button className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white">
            Enter the Lab
            <ArrowRight
              size={16}
              className="text-butter-deep transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </article>

        {/* ---------- resources ---------- */}
        <article className="order-2 md:order-4 flex flex-col items-center justify-center rounded-[28px] bg-sage-soft px-6 py-12 text-center md:col-span-6">
          <h3 className="font-serif text-[42px] italic leading-none tracking-tight text-ink sm:text-[52px]">
            resources
          </h3>
          <p className="mt-3 max-w-[30ch] text-[12px] leading-relaxed text-ink/70">
            The stack, the file, and the reads I'd hand a younger me.
          </p>
        </article>

        {/* ---------- portrait ---------- */}
        <div className="order-5 overflow-hidden rounded-[28px] md:col-span-3">
          <img
            src={reading}
            alt="Essy reading a book at a cafe"
            loading="lazy"
            className="h-56 w-full object-cover md:h-full"
          />
        </div>
      </div>
    </section>
  );
}
