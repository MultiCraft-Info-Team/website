
/* ── Navbar scroll ── */
(function () {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
})();

/* ── Hamburger menu ── */
(function () {
  const btn    = document.getElementById('hamburger-btn');
  const drawer = document.getElementById('nav-drawer');
  if (!btn || !drawer) return;

  function close() {
    drawer.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }

  btn.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    const spans = btn.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
    } else {
      close();
    }
  });

  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
})();

/* ── Language switcher ── */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => i18n.setLang(btn.dataset.lang));
});

/* ── Stub so i18n.js can call restartTyping safely ── */
window.restartTyping = function () {};

/* ── Scroll-reveal (IntersectionObserver) ── */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
})();
