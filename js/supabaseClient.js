/* ==========================================================================
   SUPABASE CLIENT CONFIG
   ==========================================================================
   Fill these two placeholders in with your real Supabase project values
   (Project Settings -> API in the Supabase dashboard) when you're ready:

     const SUPABASE_URL      = 'https://xxxxxxxxxxxx.supabase.co';
     const SUPABASE_ANON_KEY = 'eyJhbGciOi....';   // the "anon / public" key

   IMPORTANT:
   - Only ever put the ANON key here. Never the "service_role" key —
     that one bypasses Row Level Security and must stay server-side only
     (Edge Function secrets), never in a file the browser downloads.
   - The anon key is safe to ship to the browser BY DESIGN, as long as
     Row Level Security (RLS) is enabled on every table (schema.sql does
     this). RLS is what actually protects the data, not keeping this key
     secret.
   - Until you fill these in, the app keeps working exactly as before,
     using the local in-memory `state` object — nothing breaks.
   ========================================================================== */

const SUPABASE_URL = 'https://vvahwxoyjyxqsjpvcgve.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2YWh3eG95anl4cXNqcHZjZ3ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU4MzQ2MzIsImV4cCI6MjEwMTQxMDYzMn0.Ay2HcJGGoOx-EkCAaIc2sRbtk9BOKGYD9b0vOmSZY84';

/* --------------------------------------------------------------------------
   Real project credentials are now active above. Remember:

   Isse pehle: schema.sql + migrations (002,003,005,006,007,008,009,010, is
   order mein) SQL Editor mein run karein, aur zaroori edge functions
   deploy karein (README dekhein). Jab tak wo na ho, ye credentials active
   hone ke bawajood zyada tar reads/writes RLS ki wajah se fail-closed
   rahenge (koi real auth session nahi hai jab tak WeChat login wire na ho).
   -------------------------------------------------------------------------- */

const isPlaceholder = (v) => !v || v.startsWith('YOUR_SUPABASE');

// window.supabase is the UMD global exposed by the CDN script tag in index.html.
// Guard against it being unavailable (offline, blocked CDN, etc.) too.
const supabaseClient = (!isPlaceholder(SUPABASE_URL) && !isPlaceholder(SUPABASE_ANON_KEY) && window.supabase)
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

function isSupabaseConfigured() {
  return !!supabaseClient;
}

if (!isSupabaseConfigured()) {
  // Not an error — this is the expected state until real credentials are added.
  console.info('[Supabase] Not configured yet — running on local in-memory data only. Fill in js/supabaseClient.js when ready.');
}
