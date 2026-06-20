/* ══════════════════════════════════════════════
   TOTAL WISDOM CO. — GLOBAL SCRIPTS
   ══════════════════════════════════════════════ */

/* ── ACTIVE NAV ── */
(function () {
  const path = window.location.pathname.toLowerCase();
  const page =
    path.includes('service')  ? 'services'  :
    path.includes('product')  ? 'products'  :
    path.includes('about')    ? 'about'     :
    path.includes('contact')  ? 'contact'   : 'home';
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });
})();

/* ── NAVBAR SCROLL ── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ── MOBILE NAV ── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : '';
    spans[1].style.opacity   = open ? '0' : '';
    spans[2].style.transform = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
  });
  navLinks.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    })
  );
}

/* ── SCROLL REVEAL ── */
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => ro.observe(el));
}

/* ── COUNTER ANIMATION ── */
function animCount(el) {
  const target = +el.dataset.target;
  const dur    = 1800;
  const t0     = performance.now();
  const tick   = now => {
    const p = Math.min((now - t0) / dur, 1);
    el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
    if (p < 1) requestAnimationFrame(tick); else el.textContent = target;
  };
  requestAnimationFrame(tick);
}
const statEls = document.querySelectorAll('[data-target]');
if (statEls.length) {
  const co = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { animCount(e.target); co.unobserve(e.target); } });
  }, { threshold: .6 });
  statEls.forEach(el => co.observe(el));
}

/* ── PRODUCT FILTER ── */
const filterBtns = document.querySelectorAll('.filter-btn');
const prodCards  = document.querySelectorAll('.prod-card');
if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      prodCards.forEach(card => {
        const show = cat === 'all' || card.dataset.cat === cat;
        card.style.display = show ? '' : 'none';
      });
    });
  });
}

/* ── CONTACT FORM ── */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn  = form.querySelector('.btn-primary');
    const orig = btn.textContent;
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#2e8b57';
    btn.style.borderColor = '#2e8b57';
    setTimeout(() => { btn.textContent = orig; btn.style.background = ''; btn.style.borderColor = ''; form.reset(); }, 3500);
  });
}

/* ── INFO CARD POINTER-TRACKED BORDER ── */
document.querySelectorAll('.info-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const ang = Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180 / Math.PI;
    card.style.setProperty('--rotation', (ang + 90) + 'deg');
  });
});

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
  });
});
