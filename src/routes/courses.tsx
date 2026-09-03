import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/enigma/Nav";
import { Footer } from "@/components/enigma/TouchBand";
import laptopDash from "@/assets/essy-laptop-dash.jpg";
import insight from "@/assets/essy-insight.jpg";
import notes from "@/assets/essy-notes.jpg";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses & Certifications — Essy Udeme" },
      {
        name: "description",
        content:
          "Courses Essy is building, the sharpest ones curated from around the web, and the certifications earned along the way — one classroom for building your way in.",
      },
      { property: "og:title", content: "Courses & Certifications — Essy Udeme" },
      {
        property: "og:description",
        content:
          "Courses built, courses curated, and certifications earned — learn your way into the answer.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CoursesPage,
});

const building = [
  {
    title: "Build Your First Digital Product",
    desc: "From fuzzy idea to a real thing people can use — research it, scope it, ship it, tell the story.",
    status: "In the works",
    cover: laptopDash,
  },
  {
    title: "Research Like a Product Person",
    desc: "Interviews, teardowns, and finding the problem worth solving before you build a single screen.",
    status: "Outline stage",
    cover: insight,
  },
  {
    title: "Storytelling for Builders",
    desc: "Turn build logs, launches, and half-finished lessons into stories people actually read.",
    status: "In the works",
    cover: notes,
  },
];

const curated = [
  {
    title: "CS50x — Introduction to Computer Science",
    provider: "Harvard",
    why: "The best first look at how computers actually think. Hard, free, and worth every late night.",
    href: "https://cs50.harvard.edu/x/",
  },
  {
    title: "The Odin Project",
    provider: "Open source",
    why: "Full-stack and project-based — you're building real things from week one, not watching videos.",
    href: "https://www.theodinproject.com/",
  },
  {
    title: "Google UX Design Certificate",
    provider: "Coursera",
    why: "Design literacy for product people — research to prototype without the fluff.",
    href: "https://www.coursera.org/professional-certificates/google-ux-design",
  },
  {
    title: "Responsive Web Design",
    provider: "freeCodeCamp",
    why: "Frontend fundamentals with instant feedback. My favourite on-ramp for non-engineers.",
    href: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
  },
];

const certifications = [
  {
    title: "Google Project Management",
    issuer: "Coursera",
    year: "2025",
    status: "Earned",
  },
  {
    title: "Google UX Design",
    issuer: "Coursera",
    year: "2026",
    status: "In progress",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2026",
    status: "In progress",
  },
];

function CoursesPage() {
  return (
    <div className="min-h-screen bg-backdrop">
      <main className="relative mx-auto w-full max-w-[1440px] overflow-hidden bg-backdrop">
        <Nav />

        {/* Hero */}
        <section className="px-5 pb-10 pt-8 sm:px-10 sm:pt-12">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-sage-soft text-[13px] text-ink ring-1 ring-black/[0.04]">
                ★
              </span>
              <span className="text-[15px] font-medium tracking-tight text-ink">
                Courses & Certifications
              </span>
            </div>

            <h1 className="mt-5 font-serif text-[44px] italic leading-[1.02] tracking-[-1.5px] text-ink sm:text-[64px]">
              Learn your way into the answer.
            </h1>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-ink/70">
              Courses I'm building, the sharpest ones I've curated from around the web, and
              the certifications I'm collecting as receipts — one classroom for people
              building their way in.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-[11px] font-medium text-ink/55">
              <span className="rounded-full bg-black/[0.06] px-3 py-1.5">✦ Built by me</span>
              <span className="rounded-full bg-black/[0.06] px-3 py-1.5">◐ Curated from the web</span>
              <span className="rounded-full bg-black/[0.06] px-3 py-1.5">★ Certified</span>
            </div>
          </div>
        </section>

        {/* Courses I'm building */}
        <section className="px-5 pb-12 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-[15px] font-medium tracking-tight text-ink">
                Courses I'm building
              </h2>
              <span className="text-[12px] text-ink/45">learning in public, taught in public</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {building.map((c) => (
                <article
                  key={c.title}
                  className="group flex flex-col overflow-hidden rounded-[22px] bg-[#f4f4f2] ring-1 ring-black/[0.04] transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]"
                >
                  <div className="relative h-[150px] overflow-hidden">
                    <img
                      src={c.cover}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-1 text-[10.5px] font-medium text-ink/70 backdrop-blur">
                      {c.status}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-[17px] font-medium leading-[1.2] tracking-[-0.3px] text-ink">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-ink/60">{c.desc}</p>
                    <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-black/[0.05] px-3 py-1.5 text-[11px] font-medium text-ink/60">
                      ✦ First class in session soon
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Curated from the web */}
        <section className="px-5 pb-12 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-[15px] font-medium tracking-tight text-ink">
                Curated from the web
              </h2>
              <span className="text-[12px] text-ink/45">the ones actually worth your hours</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {curated.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col justify-between rounded-[22px] bg-card p-5 ring-1 ring-black/[0.04] transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(0,0,0,0.35)]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[16px] font-medium leading-[1.25] tracking-[-0.3px] text-ink">
                        {c.title}
                      </h3>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink/[0.05] text-ink transition-colors group-hover:bg-ink group-hover:text-white">
                        <ArrowUpRight size={13} />
                      </span>
                    </div>
                    <p className="mt-2 max-w-[46ch] text-[12.5px] leading-relaxed text-ink/60">
                      {c.why}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex w-fit rounded-full bg-black/[0.05] px-2.5 py-1 text-[10.5px] font-medium text-ink/60">
                    {c.provider} · Free to start
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="px-5 pb-12 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-[15px] font-medium tracking-tight text-ink">
                Certifications
              </h2>
              <span className="text-[12px] text-ink/45">receipts from the classroom</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {certifications.map((c) => (
                <article
                  key={c.title}
                  className="flex flex-col justify-between rounded-[22px] bg-lavender-soft p-5 ring-1 ring-black/[0.04]"
                >
                  <div>
                    <span
                      className={`inline-flex w-fit rounded-full px-2.5 py-1 text-[10.5px] font-medium ${
                        c.status === "Earned"
                          ? "bg-ink text-white"
                          : "bg-white/70 text-ink/70"
                      }`}
                    >
                      {c.status}
                    </span>
                    <h3 className="mt-3 text-[16px] font-medium leading-[1.25] tracking-[-0.3px] text-ink">
                      {c.title}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-ink/45">
                    {c.issuer}
                    <span className="h-1 w-1 rounded-full bg-ink/30" />
                    {c.year}
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-4 text-[12px] leading-relaxed text-ink/50">
              Every certificate here comes with notes on what it actually taught me — the
              paper matters less than the capability behind it.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-16 sm:px-10">
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-4 rounded-[28px] bg-sage-soft p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 className="text-[22px] font-medium tracking-[-0.4px] text-ink">
                Want the notes as I learn?
              </h2>
              <p className="mt-1.5 text-[13px] leading-relaxed text-ink/65">
                Every course and certification turns into build logs and lessons in the
                letter — one idea, one artifact, every week.
              </p>
            </div>
            <a href="/#newsletter" className="inline-flex shrink-0 items-center rounded-full bg-ink px-6 py-2.5 text-[12px] font-medium text-white transition-opacity hover:opacity-90">
              Get the letter
            </a>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-10">
          <div className="mx-auto max-w-5xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card px-5 py-2.5 text-[13px] font-medium text-ink/80 transition-colors hover:text-ink"
            >
              ← Back to home
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
