/* ════════════════════════════════════════════════
   WILDIUM — wildium.js
   ════════════════════════════════════════════════ */

/* ── Copy IP button ── */
(function () {
  const btn = document.getElementById('copy-ip-btn');
  const ip  = document.getElementById('server-ip');
  if (!btn || !ip) return;

  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(ip.textContent.trim());
      const original = btn.textContent;
      btn.textContent = '✅ Copié !';
      btn.style.opacity = '.8';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.opacity = '1';
      }, 2000);
    } catch {
      /* fallback: select text */
      const range = document.createRange();
      range.selectNodeContents(ip);
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(range);
    }
  });
})();
