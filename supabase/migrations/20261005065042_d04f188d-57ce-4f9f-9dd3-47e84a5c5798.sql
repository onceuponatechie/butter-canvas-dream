CREATE POLICY "Trusted server manages contact enquiries"
ON public.contact_submissions
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);