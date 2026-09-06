import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Clock } from "lucide-react";
import { PageShell, PageHeader, BackLink } from "@/components/enigma/PageShell";
import { Reveal } from "@/components/enigma/Reveal";
import portrait from "@/assets/essy-portrait.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Say hi — Essy Udeme" },
      {
        name: "description",
        content:
          "Book a coffee or send a note. Product work, research, writing, teardowns, collaborations and speaking — the door is open.",
      },
      { property: "og:title", content: "Say hi — Essy Udeme" },
      {
        property: "og:description",
        content: "Product work, research, writing and collaborations. Send a note.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const reasons = [
  "Product or design work",
  "Research or a teardown",
  "Writing / collaboration",
  "Speaking or a podcast",
  "Just saying hi",
];

function ContactPage() {
  const [reason, setReason] = useState(reasons[0]);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", note: "" });

  const mailto = `mailto:hi@essyudeme.com?subject=${encodeURIComponent(
    `${reason} — from ${form.name || "the website"}`,
  )}&body=${encodeURIComponent(`${form.note}\n\n— ${form.name}\n${form.email}`)}`;

  return (
    <PageShell>
      <PageHeader
        icon="✉"
        eyebrow="Say hi"
        title="Let's build something people"
        accent="remember"
        blurb="Tell me what you're working on and what's currently in the way. I read everything and reply to most things within a few days."
      />

      <section className="px-5 pb-20 sm:px-10">
        <div className="mx-auto grid max-w-[1180px] gap-7 lg:grid-cols-[1fr_0.85fr]">
          <Reveal dir="left">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                window.location.href = mailto;
              }}
              className="rounded-[28px] bg-card p-7 ring-1 ring-black/[0.06] sm:p-9"
            >
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-ink/45">
                What's this about?
              </span>
              <div className="mt-4 flex flex-wrap gap-2">
                {reasons.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setReason(r)}
                    className={`rounded-full border px-3.5 py-1.5 text-[12px] font-medium transition-colors ${
                      reason === r
                        ? "border-ink bg-ink text-white"
                        : "border-ink/12 text-ink/65 hover:border-ink/30 hover:text-ink"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/45">
                    Your name
                  </span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ada Obi"
                    className="mt-2 w-full rounded-2xl border border-ink/10 bg-backdrop px-4 py-3 text-[13.5px] text-ink placeholder:text-ink/30 focus:border-ink/30 focus:outline-none"
                  />
                </label>
                <label className="block">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/45">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@somewhere.good"
                    className="mt-2 w-full rounded-2xl border border-ink/10 bg-backdrop px-4 py-3 text-[13.5px] text-ink placeholder:text-ink/30 focus:border-ink/30 focus:outline-none"
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/45">
                  The note
                </span>
                <textarea
                  required
                  rows={5}
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  placeholder="What you're building, and what's in the way."
                  className="mt-2 w-full resize-none rounded-2xl border border-ink/10 bg-backdrop px-4 py-3 text-[13.5px] leading-relaxed text-ink placeholder:text-ink/30 focus:border-ink/30 focus:outline-none"
                />
              </label>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-ink px-6 py-3.5 text-[13px] font-medium text-white transition-colors hover:bg-sage hover:text-ink"
              >
                Send it <ArrowUpRight size={14} />
              </button>
              <p className="mt-3 text-center text-[11px] text-muted-ink">
                {sent
                  ? "Your mail app should be opening — if it doesn't, write to hi@essyudeme.com."
                  : "This opens your mail app with the note ready to send."}
              </p>
            </form>
          </Reveal>

          <Reveal dir="right" delay={0.1}>
            <div className="flex h-full flex-col gap-7">
              <div className="overflow-hidden rounded-[28px] ring-1 ring-black/[0.06]">
                <img
                  src={portrait}
                  alt="Portrait of Essy Udeme"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="rounded-[28px] bg-ink p-7 text-white">
                <h2 className="text-[20px] font-normal tracking-tight">
                  Or book a <span className="font-serif italic">coffee</span>
                </h2>
                <p className="mt-3 text-[13px] leading-relaxed text-white/70">
                  Thirty minutes, no agenda beyond the thing you're stuck on. Best for product
                  questions, career experiments, and first-version scoping.
                </p>
                <a
                  href="mailto:hi@essyudeme.com?subject=Book%20a%20coffee"
                  className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-sage px-5 py-2.5 text-[12.5px] font-medium text-ink transition-opacity hover:opacity-90"
                >
                  Pick a time <ArrowUpRight size={14} />
                </a>
                <div className="mt-7 grid gap-3 border-t border-white/10 pt-5 text-[12.5px] text-white/70">
                  <div className="flex items-center gap-2.5">
                    <Mail size={14} className="shrink-0 text-white/40" /> hi@essyudeme.com
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin size={14} className="shrink-0 text-white/40" /> Lagos → Everywhere
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock size={14} className="shrink-0 text-white/40" /> Replies within ~3 days
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 text-center">
          <BackLink to="/" label="Back to home" />
        </div>
      </section>
    </PageShell>
  );
}
