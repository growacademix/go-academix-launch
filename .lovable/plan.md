## Root cause

The `submit-advisory-council` edge function fails to boot, so the browser sees a CORS error (no response = no CORS headers). Logs show:

```
worker boot error: Unable to load .../@supabase/supabase-js/2.45.0/cors ... path not found
```

The import `import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'` is not a real module. The same broken import exists in `submit-lead`.

## Fix

Replace the bad import in both edge functions with an inline `corsHeaders` constant (the standard Lovable pattern):

```ts
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
```

Files to update:
1. `supabase/functions/submit-advisory-council/index.ts` — remove bad import, add inline `corsHeaders`.
2. `supabase/functions/submit-lead/index.ts` — same fix (same broken import per logs).

Then redeploy both functions and test the advisory council submission from the preview to confirm a 200 response.

No frontend, schema, or RLS changes needed.