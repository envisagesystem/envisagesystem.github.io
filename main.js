// main.js - small vanilla scroll reveal + smooth nav highlight
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

  // observe checklist items individually (stagger)
  q(".check").forEach((el, idx) => {
    // small delay to stagger after heroRight
    setTimeout(() => observer.observe(el), idx * 80);
  });

  // about cards, chips
  q(".card-light, .card-muted").forEach((el) => observer.observe(el));
  q(".chip").forEach((el, idx) => {
    // add staggered reveal for chips
    setTimeout(() => observer.observe(el), idx * 30);
  });

  // services: reveal with stagger inside grid
  q(".service-card").forEach((el, idx) => {
    // observe each service card; we can set small timeout for nicer stagger
    setTimeout(() => observer.observe(el), idx * 90);
  });

  // contact cards
  q(".contact-card, .contact-box, .cta-box").forEach((el) => observer.observe(el));

  // smooth nav highlighting
  const sections = q("main section[id], main [id]");
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
    { root: null, threshold: 0.35 },
  );

  sections.forEach((s) => sectionObserver.observe(s));

  // mobile nav behavior: simple scroll offset fix for anchor links
  const navAnchors = q('a[href^="#"]');
  navAnchors.forEach((a) => {
    a.addEventListener("click", (e) => {
      // let default smooth scroll happen
      // for small offset (header height) we could adjust, but using CSS scroll-behavior is simpler
      // close any mobile nav here if implemented
    });
  });

  // small intro timeline for hero elements (in case not triggered by scroll on large screens)
  window.addEventListener("load", () => {
    setTimeout(() => {
      if (heroTitle) heroTitle.classList.add("in-view");
      setTimeout(() => {
        if (heroLead) heroLead.classList.add("in-view");
      }, 120);
      setTimeout(() => {
        if (ctas) ctas.classList.add("in-view");
      }, 260);
      setTimeout(() => {
        if (heroRight) heroRight.classList.add("in-view");
      }, 420);
    }, 160);
  });
})();
