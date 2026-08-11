/* ==========================================================================
   ARTICLE-COMMON.JS
   ==========================================================================
   Shared theme + language toggle logic for articles/*.html.
   Mirrors the main app's storage keys (scanser_theme / scanser_lang) so
   switching in one place stays in sync when the user navigates back.
   ========================================================================== */
(function () {
  var theme = localStorage.getItem('scanser_theme') || 'light';
  // Default language is Chinese, matching state.language default in js/app.js.
  var lang = localStorage.getItem('scanser_lang') || 'zh';

  var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path></svg>';
  var MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';

  function applyTheme(t) {
    if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
  }
  function applyLang(l) {
    document.documentElement.setAttribute('data-page-lang', l);
    document.documentElement.setAttribute('lang', l === 'zh' ? 'zh-CN' : 'en');
  }

  // Apply immediately (script runs at end of body, same timing as before) to
  // avoid a visible flash of the wrong theme/language.
  applyTheme(theme);
  applyLang(lang);

  var themeBtn = document.getElementById('article-theme-toggle');
  var langBtn = document.getElementById('article-lang-toggle');

  function renderThemeBtn() { if (themeBtn) themeBtn.innerHTML = theme === 'dark' ? SUN : MOON; }
  function renderLangBtn() { if (langBtn) langBtn.textContent = lang === 'zh' ? 'EN' : '中'; }
  renderThemeBtn();
  renderLangBtn();

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      theme = theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('scanser_theme', theme); } catch (e) {}
      applyTheme(theme);
      renderThemeBtn();
    });
  }
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      lang = lang === 'zh' ? 'en' : 'zh';
      try { localStorage.setItem('scanser_lang', lang); } catch (e) {}
      applyLang(lang);
      renderLangBtn();
    });
  }
})();
