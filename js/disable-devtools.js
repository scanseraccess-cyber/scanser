/* ==========================================================================
   DISABLE RIGHT-CLICK / VIEW-SOURCE / DEVTOOLS SHORTCUTS
   ==========================================================================
   Heads up (read this before relying on it):
   - This is a UX deterrent only, NOT real security. Any visitor can still
     open DevTools via the browser menu, disable JavaScript, or use the
     Network tab / curl to see everything your server sends.
   - It will not stop anyone determined to view your HTML/CSS/JS.
   - It can annoy legitimate users (e.g. people who copy text, or use
     Ctrl+U/F12 for accessibility or debugging their own browser issues).
   - Never use this as a substitute for real protection. Actual secrets
     (API keys, passwords, service_role keys) must never be shipped to the
     browser at all — keep those server-side, protected by Supabase Row
     Level Security, Edge Function secrets, etc.
   ========================================================================== */

document.addEventListener('contextmenu', (e) => e.preventDefault());

document.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase();

  // F12
  if (key === 'F12') { e.preventDefault(); return; }

  // Ctrl+Shift+I / J / C  (DevTools, Console, Inspect Element)
  if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(key)) {
    e.preventDefault();
    return;
  }

  // Ctrl+U (View Source)
  if (e.ctrlKey && key === 'U') { e.preventDefault(); return; }

  // Ctrl+S (Save Page)
  if (e.ctrlKey && key === 'S') { e.preventDefault(); return; }

  // Cmd+Option+I/J/C on Mac
  if (e.metaKey && e.altKey && ['I', 'J', 'C'].includes(key)) {
    e.preventDefault();
    return;
  }
});
