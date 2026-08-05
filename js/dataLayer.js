/* ==========================================================================
   DATA LAYER
   ==========================================================================
   Thin wrapper around Supabase calls used by app.js. Every function checks
   isSupabaseConfigured() first and returns null/no-ops if it isn't — so the
   app works identically on local in-memory state (state.scans, state.auditLog,
   etc.) whether or not Supabase credentials have been filled in yet.

   Once Supabase Auth is wired up (auth.uid() will exist), these calls will
   start actually persisting. Until then RLS denies everything by default,
   which is the safe behavior — see supabase/schema.sql for details.
   ========================================================================== */

const DataLayer = {
  // ---- Audit log --------------------------------------------------------
  async logAudit(action, details, actorLabel) {
    if (!isSupabaseConfigured()) return null;
    try {
      const { data: { user } = {} } = await supabaseClient.auth.getUser();
      const { error } = await supabaseClient.from('audit_log').insert({
        user_id: user ? user.id : null,
        actor_label: actorLabel || null,
        action,
        details: details || null
      });
      if (error) console.warn('[DataLayer] logAudit failed:', error.message);
      return !error;
    } catch (err) {
      console.warn('[DataLayer] logAudit error:', err);
      return null;
    }
  },

  async loadAuditLog(limit = 200) {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient
      .from('audit_log')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);
    if (error) { console.warn('[DataLayer] loadAuditLog failed:', error.message); return null; }
    return data;
  },

  // ---- Scans --------------------------------------------------------------
  async saveScan(scan) {
    if (!isSupabaseConfigured()) return null;
    try {
      const { data: { user } = {} } = await supabaseClient.auth.getUser();
      if (!user) return null; // no session yet — local state carries it instead
      const { data, error } = await supabaseClient.from('scans').insert({
        user_id: user.id,
        tool_id: scan.toolId,
        title: scan.title,
        word_count: scan.wordCount || null,
        notes: scan.notes || null,
        score: scan.score || null,
        status: scan.status || 'queued'
      }).select().single();
      if (error) { console.warn('[DataLayer] saveScan failed:', error.message); return null; }
      return data;
    } catch (err) {
      console.warn('[DataLayer] saveScan error:', err);
      return null;
    }
  },

  async loadScans() {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient
      .from('scans')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) { console.warn('[DataLayer] loadScans failed:', error.message); return null; }
    return data;
  },

  // ---- Tool enable/disable + per-user access (tool catalog stays in code) --
  async loadToolSettings() {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient.from('tool_settings').select('*');
    if (error) { console.warn('[DataLayer] loadToolSettings failed:', error.message); return null; }
    return data;
  },

  async setToolEnabled(toolId, enabled) {
    if (!isSupabaseConfigured()) return null;
    const { error } = await supabaseClient
      .from('tool_settings')
      .upsert({ tool_id: toolId, enabled, updated_at: new Date().toISOString() });
    if (error) console.warn('[DataLayer] setToolEnabled failed:', error.message);
    return !error;
  },

  // ---- Profiles (real accounts, admin-facing Users / Access page) ---------
  // RLS: a normal user only ever gets their own row back here; an admin gets
  // every row (see profiles_select_own_or_admin in schema.sql).
  async loadProfiles() {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient
      .from('profiles')
      .select('id, name, email, role, status, created_at')
      .order('created_at', { ascending: true });
    if (error) { console.warn('[DataLayer] loadProfiles failed:', error.message); return null; }
    return data;
  },

  // Admin-only writes (role/status) — RLS's profiles_admin_write policy
  // rejects this silently (as a no-op update) for non-admin callers.
  async updateProfile(userId, patch) {
    if (!isSupabaseConfigured()) return null;
    const { error } = await supabaseClient.from('profiles').update(patch).eq('id', userId);
    if (error) console.warn('[DataLayer] updateProfile failed:', error.message);
    return !error;
  },

  // ---- Per-user tool access -------------------------------------------------
  async loadUserToolAccess() {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient.from('user_tool_access').select('*');
    if (error) { console.warn('[DataLayer] loadUserToolAccess failed:', error.message); return null; }
    return data;
  },

  // Replaces a user's full set of allowed tool ids (admin-only per RLS).
  async setUserToolAccess(userId, toolIds) {
    if (!isSupabaseConfigured()) return null;
    const { error: delError } = await supabaseClient.from('user_tool_access').delete().eq('user_id', userId);
    if (delError) { console.warn('[DataLayer] setUserToolAccess (clear) failed:', delError.message); return false; }
    if (!toolIds || !toolIds.length) return true;
    const rows = toolIds.map(toolId => ({ user_id: userId, tool_id: toolId }));
    const { error: insError } = await supabaseClient.from('user_tool_access').insert(rows);
    if (insError) { console.warn('[DataLayer] setUserToolAccess (insert) failed:', insError.message); return false; }
    return true;
  },

  // ---- API key metadata (display only — never the real secret) -----------
  async loadApiKeysMeta() {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient.from('api_keys_meta').select('*');
    if (error) { console.warn('[DataLayer] loadApiKeysMeta failed:', error.message); return null; }
    return data;
  },

  // ---- Notifications -------------------------------------------------------
  async loadNotifications() {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient
      .from('notifications')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) { console.warn('[DataLayer] loadNotifications failed:', error.message); return null; }
    return data;
  },

  async markNotificationRead(id) {
    if (!isSupabaseConfigured()) return null;
    const { error } = await supabaseClient.from('notifications').update({ read: true }).eq('id', id);
    if (error) console.warn('[DataLayer] markNotificationRead failed:', error.message);
    return !error;
  },

  // Creates a notification owned by the current signed-in user (see
  // notifications_insert_own in schema.sql). Used for events that happen
  // client-side, like a mock scan finishing in the browser. Returns the
  // inserted row (with its real DB uuid) so the caller can swap out any
  // temporary local id, or null if it couldn't be saved.
  async createNotification({ type, title, body, route }) {
    if (!isSupabaseConfigured()) return null;
    try {
      const { data: { user } = {} } = await supabaseClient.auth.getUser();
      if (!user) return null;
      const { data, error } = await supabaseClient.from('notifications').insert({
        user_id: user.id,
        type: type || 'info',
        title,
        body: body || null,
        route: route || null
      }).select().single();
      if (error) { console.warn('[DataLayer] createNotification failed:', error.message); return null; }
      return data;
    } catch (err) {
      console.warn('[DataLayer] createNotification error:', err);
      return null;
    }
  },

  async markAllNotificationsRead() {
    if (!isSupabaseConfigured()) return null;
    try {
      const { data: { user } = {} } = await supabaseClient.auth.getUser();
      if (!user) return null;
      const { error } = await supabaseClient
        .from('notifications')
        .update({ read: true })
        .eq('user_id', user.id)
        .eq('read', false);
      if (error) console.warn('[DataLayer] markAllNotificationsRead failed:', error.message);
      return !error;
    } catch (err) {
      console.warn('[DataLayer] markAllNotificationsRead error:', err);
      return null;
    }
  },

  // ---- Credit settings (admin-configurable scan cost / signup grant) ------
  async loadCreditSettings() {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient
      .from('credit_settings')
      .select('scan_cost, signup_grant')
      .eq('id', 1)
      .maybeSingle();
    if (error) { console.warn('[DataLayer] loadCreditSettings failed:', error.message); return null; }
    return data;
  },

  // Records spending `amount` credits for the current user (delta is stored
  // negative). Restricted by usage_ledger_insert_own_spend RLS policy to
  // reason='scan' and delta<=0 — the client literally cannot grant credits.
  async deductCredit(scanId, amount) {
    if (!isSupabaseConfigured()) return null;
    try {
      const { data: { user } = {} } = await supabaseClient.auth.getUser();
      if (!user) return null;
      const { error } = await supabaseClient.from('usage_ledger').insert({
        user_id: user.id,
        scan_id: scanId || null,
        delta: -Math.abs(amount || 0),
        reason: 'scan'
      });
      if (error) console.warn('[DataLayer] deductCredit failed:', error.message);
      return !error;
    } catch (err) {
      console.warn('[DataLayer] deductCredit error:', err);
      return null;
    }
  },

  // ---- Credit balance (derived from usage_ledger — never a mutable column) -
  async loadCreditBalance() {
    if (!isSupabaseConfigured()) return null;
    try {
      const { data: { user } = {} } = await supabaseClient.auth.getUser();
      if (!user) return null;
      const { data, error } = await supabaseClient
        .from('user_credit_balance')
        .select('balance')
        .eq('user_id', user.id)
        .maybeSingle();
      if (error) { console.warn('[DataLayer] loadCreditBalance failed:', error.message); return null; }
      return data ? data.balance : 0;
    } catch (err) {
      console.warn('[DataLayer] loadCreditBalance error:', err);
      return null;
    }
  },

  // ---- Admin: every user's balance in one query ---------------------------
  // RLS (usage_ledger_select_own_or_admin) lets an admin's session see every
  // row in the underlying ledger, so this view returns ALL users' balances
  // when called by an admin — no extra filtering needed here. A non-admin
  // calling this only ever gets their own row back (RLS still applies).
  async loadAllCreditBalances() {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient.from('user_credit_balance').select('user_id, balance');
    if (error) { console.warn('[DataLayer] loadAllCreditBalances failed:', error.message); return null; }
    return data;
  },

  // ---- Admin: grant or remove credits for any user -------------------------
  // Calls the admin_adjust_credit() Postgres function (migration_004), which
  // re-checks is_admin() itself server-side and writes an audit_log row in
  // the same transaction. amount: positive = add, negative = remove.
  // Returns the target user's new balance, or null on failure/not-authorized.
  async adjustUserCredit(userId, amount, note) {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient.rpc('admin_adjust_credit', {
      p_user_id: userId,
      p_amount: amount,
      p_note: note || null
    });
    if (error) { console.warn('[DataLayer] adjustUserCredit failed:', error.message); return null; }
    return data;
  }
};
