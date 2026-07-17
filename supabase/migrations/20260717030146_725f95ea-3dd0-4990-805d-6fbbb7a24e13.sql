
DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.leads;
CREATE POLICY "Anyone can submit a lead" ON public.leads
FOR INSERT TO anon, authenticated
WITH CHECK (
  email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND char_length(email) BETWEEN 5 AND 320
  AND (school IS NULL OR char_length(school) BETWEEN 1 AND 200)
  AND (notes IS NULL OR char_length(notes) <= 2000)
  AND (source IS NULL OR char_length(source) <= 100)
);

DROP POLICY IF EXISTS "Anyone can submit" ON public.advisory_council_submissions;
CREATE POLICY "Anyone can submit" ON public.advisory_council_submissions
FOR INSERT TO anon, authenticated
WITH CHECK (
  email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND char_length(email) BETWEEN 5 AND 320
  AND char_length(school) BETWEEN 2 AND 200
  AND (message IS NULL OR char_length(message) <= 2000)
);
