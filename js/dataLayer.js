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
      .select('id, name, email, role, status, created_at, unique_id, external_id')
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

  // ---- Credit settings (admin-configurable free credits per tool / cost per use) ------
  async loadCreditSettings() {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient
      .from('credit_settings')
      .select('scan_cost, free_credits_per_tool, payment_instructions')
      .eq('id', 1)
      .maybeSingle();
    if (error) { console.warn('[DataLayer] loadCreditSettings failed:', error.message); return null; }
    return data;
  },

  // Admin-only write (RLS credit_settings_admin_write). Returns true/false.
  async updateCreditSettings(patch) {
    if (!isSupabaseConfigured()) return null;
    const { error } = await supabaseClient
      .from('credit_settings')
      .update({ ...patch, updated_at: new Date().toISOString() })
      .eq('id', 1);
    if (error) { console.warn('[DataLayer] updateCreditSettings failed:', error.message); return false; }
    return true;
  },

  // Records spending `amount` credits from ONE tool's balance for the
  // current user (delta is stored negative). Restricted by
  // usage_ledger_insert_own_spend RLS policy to reason='scan' and
  // delta<=0 with a tool_id — the client literally cannot grant credits.
  async deductCredit(scanId, toolId, amount) {
    if (!isSupabaseConfigured()) return null;
    try {
      const { data: { user } = {} } = await supabaseClient.auth.getUser();
      if (!user) return null;
      const { error } = await supabaseClient.from('usage_ledger').insert({
        user_id: user.id,
        scan_id: scanId || null,
        tool_id: toolId,
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
  // Returns every tool's balance for the current user: [{ tool_id, balance }]
  async loadCreditBalance() {
    if (!isSupabaseConfigured()) return null;
    try {
      const { data: { user } = {} } = await supabaseClient.auth.getUser();
      if (!user) return null;
      const { data, error } = await supabaseClient
        .from('user_tool_credit_balance')
        .select('tool_id, balance')
        .eq('user_id', user.id);
      if (error) { console.warn('[DataLayer] loadCreditBalance failed:', error.message); return null; }
      return data || [];
    } catch (err) {
      console.warn('[DataLayer] loadCreditBalance error:', err);
      return null;
    }
  },

  // ---- Admin: every user's every-tool balance in one query ----------------
  // RLS (usage_ledger_select_own_or_admin, which the view inherits) lets an
  // admin's session see every row, so this returns ALL users' per-tool
  // balances when called by an admin — no extra filtering needed here.
  async loadAllToolCreditBalances() {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient.from('user_tool_credit_balance').select('user_id, tool_id, balance');
    if (error) { console.warn('[DataLayer] loadAllToolCreditBalances failed:', error.message); return null; }
    return data;
  },

  // ---- Admin: grant or remove credits for ONE user's ONE tool -------------
  // Calls the admin_adjust_tool_credit() Postgres function (migration_007),
  // which re-checks is_admin() itself server-side and writes an audit_log
  // row in the same transaction. amount: positive = add, negative = remove.
  // Returns that tool's new balance for the user, or null on failure.
  async adjustUserToolCredit(userId, toolId, amount, note) {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient.rpc('admin_adjust_tool_credit', {
      p_user_id: userId,
      p_tool_id: toolId,
      p_amount: amount,
      p_note: note || null
    });
    if (error) { console.warn('[DataLayer] adjustUserToolCredit failed:', error.message); return null; }
    return data;
  },

  // ---- Redeem codes ---------------------------------------------------------
  // Calls the redeem_code() Postgres function (migration_011_redeem_codes.sql)
  // — a SECURITY DEFINER RPC so the validity check + use-count increment +
  // membership extension all happen server-side in one transaction, instead
  // of a client-writable table. Returns { ok, hours, reason } or null if the
  // RPC itself isn't reachable (caller falls back to the local demo store).
  async redeemCode(code) {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient.rpc('redeem_code', { p_code: (code || '').trim().toUpperCase() });
    if (error) { console.warn('[DataLayer] redeemCode failed:', error.message); return null; }
    return data;
  },

  // Admin-only: create a new code. Direct table insert — RLS's
  // redeem_codes_admin_write policy is what actually enforces "admin only",
  // this is just the client call.
  async adminCreateRedeemCode({ hours, maxUses, expiresInDays }) {
    if (!isSupabaseConfigured()) return null;
    const code = 'SC' + Math.random().toString(36).slice(2, 8).toUpperCase();
    const { data, error } = await supabaseClient.from('redeem_codes').insert({
      code,
      hours: hours || 24,
      max_uses: maxUses || 1,
      expires_at: expiresInDays ? new Date(Date.now() + expiresInDays * 86400000).toISOString() : null
    }).select().single();
    if (error) { console.warn('[DataLayer] adminCreateRedeemCode failed:', error.message); return null; }
    return data;
  },

  async adminLoadRedeemCodes() {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient.from('redeem_codes').select('*').order('created_at', { ascending: false });
    if (error) { console.warn('[DataLayer] adminLoadRedeemCodes failed:', error.message); return null; }
    return data;
  },

  async adminSetRedeemCodeDisabled(code, disabled) {
    if (!isSupabaseConfigured()) return null;
    const { error } = await supabaseClient.from('redeem_codes').update({ disabled: !!disabled }).eq('code', code);
    if (error) console.warn('[DataLayer] adminSetRedeemCodeDisabled failed:', error.message);
    return !error;
  },

  // ---- Migration (old pre-Scanser account → this account) -------------------
  // Calls the migrate_old_account() Postgres function (migration_012_old_accounts.sql)
  // — SECURITY DEFINER so the password check against old_accounts_staging
  // happens server-side and the client never sees other rows (RLS denies
  // direct table access entirely, same pattern as api_keys_meta).
  async migrateOldAccount(identifier, password) {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient.rpc('migrate_old_account', {
      p_identifier: (identifier || '').trim(),
      p_password: password || ''
    });
    if (error) { console.warn('[DataLayer] migrateOldAccount failed:', error.message); return null; }
    return data;
  },

  // ---- Promotion (social-post reward submissions) ---------------------------
  async submitPromotionApplication(submission) {
    if (!isSupabaseConfigured()) return null;
    try {
      const { data: { user } = {} } = await supabaseClient.auth.getUser();
      if (!user) return null;
      const { error } = await supabaseClient.from('promotion_submissions').insert({
        user_id: user.id,
        platform: submission.platform,
        post_url: submission.postUrl,
        likes_claimed: submission.likes,
        description: submission.description,
        screenshot_name: submission.screenshotName || null,
        tier_id: submission.tierId,
        status: 'pending'
      });
      if (error) console.warn('[DataLayer] submitPromotionApplication failed:', error.message);
      return !error;
    } catch (err) {
      console.warn('[DataLayer] submitPromotionApplication error:', err);
      return null;
    }
  },

  async loadOwnPromotionApplications() {
    if (!isSupabaseConfigured()) return null;
    try {
      const { data: { user } = {} } = await supabaseClient.auth.getUser();
      if (!user) return null;
      const { data, error } = await supabaseClient
        .from('promotion_submissions')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      if (error) { console.warn('[DataLayer] loadOwnPromotionApplications failed:', error.message); return null; }
      return data;
    } catch (err) {
      console.warn('[DataLayer] loadOwnPromotionApplications error:', err);
      return null;
    }
  },

  // Admin-only (RLS promotion_submissions_admin_all) — every submission
  // from every user, for the Phase 4 review queue.
  async adminLoadPromotionApplications() {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient
      .from('promotion_submissions')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) { console.warn('[DataLayer] adminLoadPromotionApplications failed:', error.message); return null; }
    return data;
  },

  // Calls the admin_review_promotion_application() RPC (migration_014) —
  // a raw table update isn't enough here because approving a
  // membership-tier submission also has to extend user_memberships
  // server-side, so this goes through the same SECURITY DEFINER RPC
  // pattern as migrate_old_account / admin_adjust_tool_credit.
  async adminReviewPromotionApplication(id, status) {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient.rpc('admin_review_promotion_application', {
      p_id: id, p_status: status
    });
    if (error) { console.warn('[DataLayer] adminReviewPromotionApplication failed:', error.message); return null; }
    return data;
  },

  // Manual customer-service cash-payout confirmation (¥100/¥300 tiers) —
  // calls admin_mark_promotion_paid() (migration_014).
  async adminMarkPromotionPaid(id) {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient.rpc('admin_mark_promotion_paid', { p_id: id });
    if (error) { console.warn('[DataLayer] adminMarkPromotionPaid failed:', error.message); return null; }
    return data;
  },

  // ---- Old accounts (migration staging) admin management --------------------
  // old_accounts_staging has no direct RLS policy for any role (see
  // migration_012) — these two RPCs (migration_014) are the sanctioned
  // admin-only door into it: list existing rows, and add new ones (e.g.
  // seeding real old-system exports) without ever exposing password
  // hashes to a client that isn't running the lookup itself.
  async adminLoadOldAccounts() {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient.rpc('admin_list_old_accounts');
    if (error) { console.warn('[DataLayer] adminLoadOldAccounts failed:', error.message); return null; }
    return data;
  },

  async adminCreateOldAccount({ identifier, password, hoursRemaining }) {
    if (!isSupabaseConfigured()) return null;
    const { data, error } = await supabaseClient.rpc('admin_create_old_account', {
      p_identifier: identifier, p_password: password, p_hours: hoursRemaining
    });
    if (error) { console.warn('[DataLayer] adminCreateOldAccount failed:', error.message); return null; }
    return data;
  }
};
