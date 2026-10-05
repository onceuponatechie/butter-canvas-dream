CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  organisation text,
  project_type text NOT NULL,
  budget_range text,
  timeline text,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT contact_name_length CHECK (char_length(name) BETWEEN 2 AND 120),
  CONSTRAINT contact_email_length CHECK (char_length(email) BETWEEN 5 AND 254),
  CONSTRAINT contact_organisation_length CHECK (organisation IS NULL OR char_length(organisation) <= 160),
  CONSTRAINT contact_message_length CHECK (char_length(message) BETWEEN 20 AND 5000)
);

GRANT ALL ON public.contact_submissions TO service_role;

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE INDEX contact_submissions_email_created_idx
  ON public.contact_submissions (lower(email), created_at DESC);