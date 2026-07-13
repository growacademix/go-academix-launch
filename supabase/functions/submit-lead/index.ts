import { createClient } from 'npm:@supabase/supabase-js@2.45.0'
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { z } from 'npm:zod@3.23.8'

const BodySchema = z.object({
  email: z.string().email().max(255),
  school: z.string().max(255).optional().nullable(),
  source: z.string().max(64).optional().nullable(),
})

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const parsed = BodySchema.safeParse(await req.json())
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
    const { email, school, source } = parsed.data

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    )

    const { data: inserted, error: insertError } = await supabase
      .from('leads')
      .insert({
        email,
        school: school ?? null,
        source: source ?? 'landing_page',
      })
      .select('id')
      .single()

    if (insertError) {
      console.error('Insert failed', insertError)
      return new Response(JSON.stringify({ error: 'Failed to save lead' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    // Best-effort notification to Jocelyn (works once email domain is configured)
    try {
      await supabase.functions.invoke('send-transactional-email', {
        body: {
          templateName: 'lead-notification',
          recipientEmail: 'jocelyn@goacademix.com',
          idempotencyKey: `lead-${inserted.id}`,
          templateData: { email, school: school ?? '', source: source ?? 'landing_page' },
        },
      })
    } catch (e) {
      console.error('Email invoke failed (non-fatal)', e)
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('Unexpected error', err)
    return new Response(JSON.stringify({ error: 'Unexpected error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
