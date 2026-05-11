/* BRO I FORGOT TO ADD CODE IN THIS FILEEEEEEEEEEEEE 
I'm a failure as a programmer ._. 

Anyways here's the updated code stuff */

/*
  ============================================
  ACCESSIBILITY WIDGET
  ============================================
  Drop this file in your project folder as a11y-widget.js.
  It is already linked in index.html — no other changes needed.

  WHAT EACH OPTION DOES:
    High Contrast  → adds class a11y-high-contrast to <body>
    Dyslexia Font  → adds class a11y-dyslexia to <body>
    Reduce Motion  → adds class a11y-reduce-motion to <body>
    Grayscale      → adds class a11y-grayscale to <body>
    Text Size      → scales body font-size between 80% and 160%

  Preferences are saved to localStorage so they persist on reload.
*/

(function () {

  var STORAGE_KEY = 'a11y-prefs';

  var defaults = {
    contrast:  false,
    dyslexia:  false,
    motion:    false,
    grayscale: false,
    fontScale: 100
  };

  function loadPrefs() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      return saved ? Object.assign({}, defaults, JSON.parse(saved)) : Object.assign({}, defaults);
    } catch (e) {
      return Object.assign({}, defaults);
    }
  }

  function savePrefs(prefs) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch (e) {}
  }

  var prefs = loadPrefs();

  /* ---- Apply classes and font size to <body> ---- */
  function applyPrefs() {
    var body = document.body;

    body.classList.toggle('a11y-high-contrast', prefs.contrast);
    body.classList.toggle('a11y-dyslexia',      prefs.dyslexia);
    body.classList.toggle('a11y-reduce-motion', prefs.motion);

    /* Grayscale and high-contrast both use CSS filter — only one active */
    body.classList.toggle('a11y-grayscale', prefs.grayscale && !prefs.contrast);

    body.style.fontSize = prefs.fontScale + '%';

    savePrefs(prefs);
    syncUI();
  }

  /* ---- Sync toggle buttons and font display ---- */
  function syncUI() {
    setToggle('contrast',  prefs.contrast);
    setToggle('dyslexia',  prefs.dyslexia);
    setToggle('motion',    prefs.motion);
    setToggle('grayscale', prefs.grayscale);

    var display = document.getElementById('a11y-font-display');
    if (display) display.textContent = prefs.fontScale + '%';
  }

  function setToggle(id, on) {
    var tog = document.getElementById('a11y-tog-' + id);
    var opt = document.getElementById('a11y-opt-' + id);
    if (tog) tog.classList.toggle('on', on);
    if (opt) {
      opt.classList.toggle('active', on);
      opt.setAttribute('aria-pressed', String(on));
    }
  }

  /* ---- Panel open / close ---- */
  function openPanel() {
    var panel = document.getElementById('a11yPanel');
    var fab   = document.getElementById('a11yBtn');
    if (!panel || !fab) return;
    panel.classList.add('open');
    fab.setAttribute('aria-expanded', 'true');
    var closeBtn = document.getElementById('a11yClose');
    if (closeBtn) closeBtn.focus();
  }

  function closePanel() {
    var panel = document.getElementById('a11yPanel');
    var fab   = document.getElementById('a11yBtn');
    if (!panel || !fab) return;
    panel.classList.remove('open');
    fab.setAttribute('aria-expanded', 'false');
    fab.focus();
  }

  function togglePanel() {
    var panel = document.getElementById('a11yPanel');
    if (!panel) return;
    panel.classList.contains('open') ? closePanel() : openPanel();
  }

  /* ---- Wire everything up ---- */
  function init() {

    var fab = document.getElementById('a11yBtn');
    if (fab) fab.addEventListener('click', togglePanel);

    var closeBtn = document.getElementById('a11yClose');
    if (closeBtn) closeBtn.addEventListener('click', closePanel);

    /* Escape key closes the panel */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        var panel = document.getElementById('a11yPanel');
        if (panel && panel.classList.contains('open')) closePanel();
      }
    });

    /* Click outside panel to close */
    document.addEventListener('click', function (e) {
      var panel = document.getElementById('a11yPanel');
      var fab   = document.getElementById('a11yBtn');
      if (!panel || !fab) return;
      if (
        panel.classList.contains('open') &&
        !panel.contains(e.target) &&
        e.target !== fab
      ) {
        closePanel();
      }
    });

    /* Toggle option rows */
    ['contrast', 'dyslexia', 'motion', 'grayscale'].forEach(function (id) {
      var row = document.getElementById('a11y-opt-' + id);
      if (!row) return;

      function toggle() {
        prefs[id] = !prefs[id];
        applyPrefs();
      }

      row.addEventListener('click', toggle);
      row.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });
    });

    /* Font size buttons */
    var incBtn = document.getElementById('a11y-font-inc');
    var decBtn = document.getElementById('a11y-font-dec');

    if (incBtn) {
      incBtn.addEventListener('click', function () {
        if (prefs.fontScale < 160) {
          prefs.fontScale += 10;
          applyPrefs();
        }
      });
    }

    if (decBtn) {
      decBtn.addEventListener('click', function () {
        if (prefs.fontScale > 80) {
          prefs.fontScale -= 10;
          applyPrefs();
        }
      });
    }

    /* Reset all */
    var resetBtn = document.getElementById('a11y-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        prefs = Object.assign({}, defaults);
        applyPrefs();
      });
    }

    /* Apply any saved prefs immediately on load */
    applyPrefs();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
