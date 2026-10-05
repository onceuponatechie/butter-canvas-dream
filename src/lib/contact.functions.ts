import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  organisation: z.string().trim().max(160).optional().default(""),
  projectType: z.enum(["Research & insight", "Decks & narratives", "Digital experience", "Something else"]),
  budgetRange: z.enum(["Under £2,500", "£2,500–£5,000", "£5,000–£10,000", "£10,000+"]).optional(),
  timeline: z.enum(["As soon as possible", "Within 1–2 months", "Within 3–6 months", "Just exploring"]).optional(),
  message: z.string().trim().min(20).max(5000),
  website: z.string().max(0).optional(),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website) return { ok: true };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const cooldown = new Date(Date.now() - 2 * 60 * 1000).toISOString();
    const { data: recent } = await supabaseAdmin
      .from("contact_submissions")
      .select("id")
      .eq("email", data.email.toLowerCase())
      .gte("created_at", cooldown)
      .limit(1);

    if (recent && recent.length > 0) {
      throw new Error("Your note is already safely with me.");
    }

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      email: data.email.toLowerCase(),
      organisation: data.organisation || null,
      project_type: data.projectType,
      budget_range: data.budgetRange ?? null,
      timeline: data.timeline ?? null,
      message: data.message,
    });

    if (error) throw new Error("I couldn't save your note. Please try again.");
    return { ok: true };
  });