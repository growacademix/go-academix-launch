
CREATE TABLE public.advisory_council_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  school TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.advisory_council_submissions TO anon, authenticated;
GRANT ALL ON public.advisory_council_submissions TO service_role;

ALTER TABLE public.advisory_council_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit"
  ON public.advisory_council_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
