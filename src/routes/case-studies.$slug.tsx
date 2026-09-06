import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageShell, BackLink, Prose } from "@/components/enigma/PageShell";
import { Reveal } from "@/components/enigma/Reveal";
import { cases, getCase } from "@/content/cases";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCase(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Case study not found" }, { name: "robots", content: "noindex" }] };
    }
    const { study } = loaderData;
    return {
      meta: [
        { title: `${study.name} — Case study by Essy Udeme` },
        { name: "description", content: study.summary },
        { property: "og:title", content: `${study.name} — Case study` },
        { property: "og:description", content: study.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: CaseNotFound,
  component: CasePage,
});

function CaseNotFound() {
  return (
    <PageShell>
      <div className="px-5 py-28 text-center sm:px-10">
        <h1 className="text-[clamp(26px,3.4vw,40px)] font-normal tracking-tight text-ink">
          No case study <span className="font-serif italic">here</span>.
        </h1>
        <div className="mt-8">
          <BackLink to="/" label="Back to home" />
        </div>
      </div>
    </PageShell>
  );
}

function CasePage() {
  const { study } = Route.useLoaderData();
  const more = cases.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <PageShell>
      <article className="px-5 pt-12 sm:px-10 sm:pt-16">
        <div className="mx-auto max-w-[1180px]">
          <BackLink to="/" label="All projects" />

          <Reveal dir="down" className="mt-8">
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-ink/45">
              {study.role} · {study.year}
            </span>
            <h1 className="mt-4 max-w-[22ch] text-[clamp(32px,4.6vw,56px)] font-normal leading-[1.05] tracking-tight text-ink md:tracking-[-2px]">
              {study.name}
            </h1>
            <p className="mt-5 max-w-[58ch] text-[15.5px] leading-relaxed text-ink/70">
              {study.summary}
            </p>
          </Reveal>

          <Reveal dir="up" delay={0.1} className="mt-10">
            <img
              src={study.img}
              alt={`${study.name} interface`}
              className="aspect-[16/9] w-full rounded-[28px] object-cover"
            />
          </Reveal>

          <Reveal dir="up" delay={0.06} className="mt-8 grid gap-px overflow-hidden rounded-[24px] bg-black/[0.07] sm:grid-cols-4">
            {study.facts.map((f) => (
              <div key={f.label} className="bg-card p-6">
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink/40">
                  {f.label}
                </div>
                <div className="mt-2 text-[14.5px] leading-snug text-ink">{f.value}</div>
              </div>
            ))}
          </Reveal>

          <div className="mt-16">
            <Prose sections={study.sections} />
          </div>

          <div className="mx-auto mt-14 grid max-w-[1180px] gap-7 sm:grid-cols-2">
            {study.gallery.map((g, i) => (
              <Reveal key={i} dir="up" delay={0.05 * i}>
                <figure>
                  <img
                    src={g.src}
                    alt={g.caption}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-[24px] object-cover"
                  />
                  <figcaption className="mt-3 text-[12px] text-muted-ink">{g.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal dir="up" className="mx-auto mt-16 max-w-[68ch]">
            <div className="rounded-[26px] bg-ink p-7 text-white sm:p-9">
              <div className="flex items-baseline gap-4">
                <div className="text-[34px] font-medium leading-none tracking-tight">{study.stat}</div>
                <div className="text-[12.5px] text-white/60">{study.statLabel}</div>
              </div>
              <span className="mt-8 block text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/50">
                What I'd carry forward
              </span>
              <ul className="mt-4 grid gap-3">
                {study.learned.map((l) => (
                  <li key={l} className="flex gap-3 text-[14.5px] leading-relaxed text-white/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                    {l}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-sage px-5 py-2.5 text-[12.5px] font-medium text-ink transition-opacity hover:opacity-90"
              >
                Work on something like this <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      <section className="px-5 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="mb-8 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-ink">
            Other projects
          </h2>
          <div className="grid gap-7 sm:grid-cols-3">
            {more.map((c, i) => (
              <Reveal key={c.slug} dir="up" delay={0.05 * i}>
                <Link
                  to="/case-studies/$slug"
                  params={{ slug: c.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-[22px] bg-card ring-1 ring-black/[0.06]"
                >
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="p-5">
                    <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                      {c.year}
                    </span>
                    <h3 className="mt-2.5 text-[16px] font-medium leading-snug tracking-tight text-ink">
                      {c.name}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
