/* ── TYPEWRITER ── */
  const phrases = [
    "Full Stack Developer.",
    "DSA Enthusiast.",
    "Open Source Builder.",
    "FAANG Aspirant.",
    "Community Founder.",
  ];
  let pIdx = 0, cIdx = 0, deleting = false;
  const tw = document.getElementById('typewriter');

  function type() {
    const current = phrases[pIdx];
    if (!deleting) {
      tw.textContent = current.slice(0, ++cIdx);
      if (cIdx === current.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      tw.textContent = current.slice(0, --cIdx);
      if (cIdx === 0) { deleting = false; pIdx = (pIdx + 1) % phrases.length; }
    }
    setTimeout(type, deleting ? 55 : 90);
  }
  type();

  /* ── NAVBAR SCROLL ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* ── HAMBURGER ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  function closeMobile() { mobileMenu.classList.remove('open'); }

  /* ── FADE IN ON SCROLL ── */
  const fadeEls = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => observer.observe(el));

  /* ── ACTIVE NAV LINK HIGHLIGHT ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
    });
  });