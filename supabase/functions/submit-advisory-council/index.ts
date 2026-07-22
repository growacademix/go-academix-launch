import { createClient } from "npm:@supabase/supabase-js@2.45.0";
import { z } from "npm:zod@3.23.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const BodySchema = z.object({
  school: z.string().min(1).max(255),
  email: z.string().email().max(255),
  message: z.string().max(5000).optional().nullable(),
});

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const { school, email, message } = parsed.data;

    const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

    const { data: inserted, error: insertError } = await supabase
      .from("advisory_council_submissions")
      .insert({ school, email, message: message ?? null })
      .select("id")
      .single();

    if (insertError) {
      console.error("Insert failed", insertError);
      return new Response(JSON.stringify({ error: "Failed to save submission" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Try to send notification email (only works once email domain is configured)
    try {
      const { error: emailError } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "advisory-council-notification",
          recipientEmail: "tanmay@goacademix.com",
          idempotencyKey: `advisory-${inserted.id}`,
          templateData: { school, email, message: message ?? "" },
        },
      });
      if (emailError) console.error("Email send failed (non-fatal)", emailError);
    } catch (e) {
      console.error("Email invoke failed (non-fatal)", e);
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Unexpected error", err);
    return new Response(JSON.stringify({ error: "Unexpected error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
