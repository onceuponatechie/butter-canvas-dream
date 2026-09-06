import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, BackLink, Prose } from "@/components/enigma/PageShell";
import { Reveal } from "@/components/enigma/Reveal";
import { getLab, lab } from "@/content/lab";

export const Route = createFileRoute("/product-lab/$slug")({
  loader: ({ params }) => {
    const entry = getLab(params.slug);
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — The Product Lab" }, { name: "robots", content: "noindex" }] };
    }
    const { entry } = loaderData;
    return {
      meta: [
        { title: `${entry.title} — The Product Lab` },
        { name: "description", content: entry.excerpt },
        { property: "og:title", content: entry.title },
        { property: "og:description", content: entry.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: LabNotFound,
  component: LabEntryPage,
});

function LabNotFound() {
  return (
    <PageShell>
      <div className="px-5 py-28 text-center sm:px-10">
        <h1 className="text-[clamp(26px,3.4vw,40px)] font-normal tracking-tight text-ink">
          Nothing on this <span className="font-serif italic">bench</span>.
        </h1>
        <div className="mt-8">
          <BackLink to="/product-lab" label="Back to the Lab" />
        </div>
      </div>
    </PageShell>
  );
}

function LabEntryPage() {
  const { entry } = Route.useLoaderData();
  const more = lab.filter((l) => l.slug !== entry.slug).slice(0, 3);

  return (
    <PageShell>
      <article className="px-5 pt-12 sm:px-10 sm:pt-16">
        <div className="mx-auto max-w-[1180px]">
          <BackLink to="/product-lab" label="All lab notes" />

          <Reveal dir="down" className="mt-8">
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-ink/45">
              {entry.kind} · {entry.date}
            </span>
            <h1 className="mt-4 max-w-[26ch] text-[clamp(30px,4.2vw,52px)] font-normal leading-[1.07] tracking-tight text-ink md:tracking-[-1.8px]">
              {entry.title}
            </h1>
          </Reveal>

          <Reveal dir="up" delay={0.08} className="mt-9 grid gap-7 md:grid-cols-[1.4fr_1fr] md:items-stretch">
            <img
              src={entry.cover}
              alt={entry.coverAlt}
              className="aspect-[16/10] w-full rounded-[26px] object-cover"
            />
            <div className="flex flex-col justify-between rounded-[26px] bg-card p-7 ring-1 ring-black/[0.06]">
              <div>
                <span className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-ink/45">
                  The question
                </span>
                <p className="mt-3 text-[16px] leading-relaxed text-ink/80">{entry.question}</p>
              </div>
              <div className="mt-8 border-t border-black/[0.07] pt-5">
                <div className="text-[30px] font-medium tracking-tight text-ink">{entry.stat}</div>
                <div className="text-[12px] text-muted-ink">{entry.statLabel}</div>
              </div>
            </div>
          </Reveal>

          <div className="mt-14">
            <Prose sections={entry.sections} />
          </div>

          <Reveal dir="up" className="mx-auto mt-14 max-w-[68ch]">
            <div className="rounded-[24px] bg-ink p-7 text-white sm:p-9">
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/50">
                Verdict
              </span>
              <p className="mt-4 text-[16px] leading-relaxed text-white/85">{entry.verdict}</p>
            </div>
          </Reveal>
        </div>
      </article>

      <section className="px-5 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="mb-8 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-ink">
            More from the bench
          </h2>
          <div className="grid gap-7 sm:grid-cols-3">
            {more.map((l, i) => (
              <Reveal key={l.slug} dir="up" delay={0.05 * i}>
                <Link
                  to="/product-lab/$slug"
                  params={{ slug: l.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-[22px] bg-card ring-1 ring-black/[0.06]"
                >
                  <img
                    src={l.cover}
                    alt={l.coverAlt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="p-5">
                    <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                      {l.kind}
                    </span>
                    <h3 className="mt-2.5 text-[16px] font-medium leading-snug tracking-tight text-ink">
                      {l.title}
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
