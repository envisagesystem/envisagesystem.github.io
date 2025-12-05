// main.js - scroll reveal + hamburger + nav highlight
(function () {
  // helpers
  const q = (s, el = document) => Array.from((el || document).querySelectorAll(s));

  // IntersectionObserver options
  const ioOptions = {
    root: null,
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.08,
  };

  // reveal callback (adds .in-view)
  function revealCallback(entries, obs) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;

        // stagger children if data-stagger attribute
        if (el.dataset && el.dataset.stagger) {
          const children = q(el.dataset.stagger, el);
          children.forEach((c, i) => {
            setTimeout(() => c.classList.add("in-view"), i * 120);
          });
        }

        el.classList.add("in-view");
        obs.unobserve(el);
      }
    });
  }

  const observer = new IntersectionObserver(revealCallback, ioOptions);

  // observe hero headline & related
  const heroTitle = document.querySelector(".hero h1");
  const heroLead = document.querySelector(".lead");
  const ctas = document.querySelector(".cta-row");
  const heroRight = document.querySelector(".hero-right");

  if (heroTitle) observer.observe(heroTitle);
  if (heroLead) observer.observe(heroLead);
  if (ctas) observer.observe(ctas);
  if (heroRight) observer.observe(heroRight);

  // checklist stagger
  q(".check").forEach((el, idx) => {
    setTimeout(() => observer.observe(el), idx * 80);
  });

  // about cards and chips
  q(".card-light, .card-muted").forEach((el) => observer.observe(el));

  q(".chip").forEach((el, idx) => {
    setTimeout(() => observer.observe(el), idx * 40);
  });

  // services stagger
  q(".service-card").forEach((el, idx) => {
    setTimeout(() => observer.observe(el), idx * 90);
  });

  // contact box
  q(".contact-box").forEach((el) => observer.observe(el));

  // smooth nav highlighting
  const sections = q("main section[id]");
  const navLinks = q('.nav a[href^="#"]');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.id;

        navLinks.forEach((a) => {
          if (a.getAttribute("href") === "#" + id) {
            a.classList.add("active");
            a.style.color =
              getComputedStyle(document.documentElement).getPropertyValue("--hero-accent").trim() || "#0b63c6";
          } else {
            a.classList.remove("active");
            a.style.color = "";
          }
        });
      });
    },
    { threshold: 0.35 },
  );

  sections.forEach((s) => sectionObserver.observe(s));

  // MOBILE HAMBURGER MENU
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileNav.classList.toggle("open");
    });

    // close menu on link click
    q(".mobile-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileNav.classList.remove("open");
      });
    });
  }

  // small intro timeline for hero elements (fallback)
  window.addEventListener("load", () => {
    setTimeout(() => {
      if (heroTitle) heroTitle.classList.add("in-view");

      setTimeout(() => heroLead && heroLead.classList.add("in-view"), 120);
      setTimeout(() => ctas && ctas.classList.add("in-view"), 260);
      setTimeout(() => heroRight && heroRight.classList.add("in-view"), 420);
    }, 160);
  });
})();
