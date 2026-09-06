import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell, BackLink, Prose } from "@/components/enigma/PageShell";
import { Reveal } from "@/components/enigma/Reveal";
import { getPost, posts } from "@/content/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Story not found — Why Not Build?" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Why Not Build?` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: StoryNotFound,
  component: PostPage,
});

function StoryNotFound() {
  return (
    <PageShell>
      <div className="px-5 py-28 text-center sm:px-10">
        <h1 className="text-[clamp(26px,3.4vw,40px)] font-normal tracking-tight text-ink">
          That story isn't <span className="font-serif italic">here</span>.
        </h1>
        <p className="mx-auto mt-4 max-w-[40ch] text-[14px] text-ink/60">
          It may have moved. The full publication is one click away.
        </p>
        <div className="mt-8">
          <BackLink to="/blog" label="Back to Why Not Build?" />
        </div>
      </div>
    </PageShell>
  );
}

function PostPage() {
  const { post } = Route.useLoaderData();
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <PageShell>
      <article className="px-5 pt-12 sm:px-10 sm:pt-16">
        <div className="mx-auto max-w-[1180px]">
          <BackLink to="/blog" label="All stories" />

          <Reveal dir="down" className="mt-8 text-center">
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-ink/45">
              {post.category} · {post.kicker}
            </span>
            <h1 className="mx-auto mt-5 max-w-[26ch] text-[clamp(30px,4.4vw,54px)] font-normal leading-[1.06] tracking-tight text-ink md:tracking-[-1.8px]">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center justify-center gap-3 text-[12px] text-muted-ink">
              <span>Essy Udeme</span>
              <span className="h-1 w-1 rounded-full bg-ink/15" />
              <span>{post.date}</span>
              <span className="h-1 w-1 rounded-full bg-ink/15" />
              <span>{post.read} read</span>
            </div>
          </Reveal>

          <Reveal dir="up" delay={0.1} className="mt-10">
            <img
              src={post.cover}
              alt={post.coverAlt}
              className="aspect-[16/9] w-full rounded-[26px] object-cover"
            />
          </Reveal>

          <div className="mt-14">
            <Prose sections={post.body} />
          </div>

          <Reveal dir="up" className="mx-auto mt-14 max-w-[68ch]">
            <div className="rounded-[24px] bg-ink p-7 text-white sm:p-9">
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/50">
                Do this next
              </span>
              <p className="mt-4 text-[16px] leading-relaxed text-white/85">{post.takeaway}</p>
              <Link
                to="/tools-and-templates"
                className="mt-6 inline-flex items-center rounded-full bg-sage px-5 py-2.5 text-[12.5px] font-medium text-ink transition-opacity hover:opacity-90"
              >
                Get the templates
              </Link>
            </div>
          </Reveal>
        </div>
      </article>

      <section className="px-5 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="mb-8 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-ink">
            Keep reading
          </h2>
          <div className="grid gap-7 sm:grid-cols-3">
            {more.map((p, i) => (
              <Reveal key={p.slug} dir="up" delay={0.05 * i}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-[22px] bg-card ring-1 ring-black/[0.06]"
                >
                  <img
                    src={p.cover}
                    alt={p.coverAlt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="p-5">
                    <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                      {p.category}
                    </span>
                    <h3 className="mt-2.5 text-[16px] font-medium leading-snug tracking-tight text-ink">
                      {p.title}
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
