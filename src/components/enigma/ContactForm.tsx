import { useServerFn } from "@tanstack/react-start";
import { ArrowRight, Check } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { submitContact } from "@/lib/contact.functions";

const fieldClass = "mt-2 h-12 w-full rounded-[14px] border border-ink/10 bg-paper/70 px-4 text-[13px] text-ink outline-none backdrop-blur-sm transition focus:border-ink/30 focus:ring-2 focus:ring-sage/40";

export function ContactForm() {
  const submit = useServerFn(submitContact);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setError("");
    const form = new FormData(event.currentTarget);

    try {
      await submit({
        data: {
          name: String(form.get("name") ?? ""),
          email: String(form.get("email") ?? ""),
          organisation: String(form.get("organisation") ?? ""),
          projectType: String(form.get("projectType") ?? "") as "Research & insight",
          budgetRange: (String(form.get("budgetRange") ?? "") || undefined) as "Under £2,500" | undefined,
          timeline: (String(form.get("timeline") ?? "") || undefined) as "Just exploring" | undefined,
          message: String(form.get("message") ?? ""),
          website: String(form.get("website") ?? ""),
        },
      });
      setState("sent");
      event.currentTarget.reset();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Something went wrong. Please try again.");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="flex min-h-[560px] flex-col items-center justify-center rounded-[28px] border border-ink/10 bg-paper/80 p-8 text-center shadow-[0_30px_80px_-46px_rgba(17,17,17,0.45)] backdrop-blur-md">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-sage text-ink"><Check size={20} /></span>
        <h2 className="mt-6 text-[30px] font-medium tracking-tight text-ink">Your note is in.</h2>
        <p className="mt-3 max-w-[34ch] text-[13px] leading-relaxed text-ink/60">Thank you for sharing the shape of the work. I’ll read it with care.</p>
        <Button type="button" variant="outline" onClick={() => setState("idle")} className="mt-7 rounded-full border-ink/15 bg-transparent px-5">Send another note</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[28px] border border-ink/10 bg-paper/80 p-5 shadow-[0_30px_80px_-46px_rgba(17,17,17,0.45)] backdrop-blur-md sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-[11px] font-medium text-ink/65">Your name<input required name="name" autoComplete="name" minLength={2} maxLength={120} className={fieldClass} placeholder="How should I address you?" /></label>
        <label className="text-[11px] font-medium text-ink/65">Email address<input required name="email" type="email" autoComplete="email" maxLength={254} className={fieldClass} placeholder="you@company.com" /></label>
      </div>
      <label className="mt-5 block text-[11px] font-medium text-ink/65">Company or organisation <span className="text-ink/35">(optional)</span><input name="organisation" autoComplete="organization" maxLength={160} className={fieldClass} placeholder="Where are you building?" /></label>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="text-[11px] font-medium text-ink/65">What are we shaping?
          <select required name="projectType" defaultValue="" className={fieldClass}>
            <option value="" disabled>Choose a direction</option><option>Research & insight</option><option>Decks & narratives</option><option>Digital experience</option><option>Something else</option>
          </select>
        </label>
        <label className="text-[11px] font-medium text-ink/65">Working budget <span className="text-ink/35">(optional)</span>
          <select name="budgetRange" defaultValue="" className={fieldClass}>
            <option value="">Still deciding</option><option>Under £2,500</option><option>£2,500–£5,000</option><option>£5,000–£10,000</option><option>£10,000+</option>
          </select>
        </label>
      </div>
      <label className="mt-5 block text-[11px] font-medium text-ink/65">Timing <span className="text-ink/35">(optional)</span>
        <select name="timeline" defaultValue="" className={fieldClass}>
          <option value="">Choose a window</option><option>As soon as possible</option><option>Within 1–2 months</option><option>Within 3–6 months</option><option>Just exploring</option>
        </select>
      </label>
      <label className="mt-5 block text-[11px] font-medium text-ink/65">Tell me about the question
        <textarea required name="message" minLength={20} maxLength={5000} rows={6} className={`${fieldClass} h-auto resize-y py-4 leading-relaxed`} placeholder="What feels messy, what have you tried, and what would a useful outcome look like?" />
      </label>
      <label className="absolute -left-[9999px]" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      {state === "error" && <p role="alert" className="mt-4 text-[12px] text-destructive">{error}</p>}
      <Button type="submit" disabled={state === "sending"} className="mt-6 h-12 w-full rounded-full bg-ink text-paper shadow-none hover:bg-sage hover:text-ink">
        {state === "sending" ? "Sending…" : "Send the note"}<ArrowRight size={15} />
      </Button>
      <p className="mt-4 text-center text-[10px] leading-relaxed text-ink/40">Your details are used only to reply to this enquiry.</p>
    </form>
  );
}