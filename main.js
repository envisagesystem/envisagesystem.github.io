// main.js — Scroll reveal + Mobile menu + Active nav highlight
(function () {
  const q = (sel, el = document) => Array.from(el.querySelectorAll(sel));

  /* -----------------------------
      INTERSECTION OBSERVER SETUP
  ----------------------------- */
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        // handle staggered children
        if (el.dataset && el.dataset.stagger) {
          const items = q(el.dataset.stagger, el);
          items.forEach((child, i) => {
            setTimeout(() => child.classList.add("in-view"), i * 120);
          });
        }

        el.classList.add("in-view");
        obs.unobserve(el);
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -12% 0px",
    },
  );

  /* -----------------------------
      REVEAL ELEMENTS
  ----------------------------- */
  const revealItems = [
    ".hero h1",
    ".lead",
    ".cta-row",
    ".hero-right",
    ".card-light",
    ".card-muted",
    ".service-card",
    ".contact-box",
  ];

  revealItems.forEach((sel) => {
    q(sel).forEach((el) => observer.observe(el));
  });

  // checklist items stagger individually
  q(".check").forEach((el, i) => {
    setTimeout(() => observer.observe(el), i * 80);
  });

  // chips stagger
  q(".chip").forEach((el, i) => {
    setTimeout(() => observer.observe(el), i * 40);
  });

  /* -----------------------------
     SECTION ACTIVE NAV INDICATOR
  ----------------------------- */
  const sections = q("main section[id]");
  const navLinks = q('.desktop-nav a[href^="#"]');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.id;

        navLinks.forEach((link) => {
          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      });
    },
    { threshold: 0.35 },
  );

  sections.forEach((sec) => sectionObserver.observe(sec));

  /* -----------------------------
      MOBILE NAV (HAMBURGER)
  ----------------------------- */
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".mobile-nav");

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobileNav.classList.toggle("open");
    });

    // close menu on clicking a mobile link
    q(".mobile-nav a").forEach((a) =>
      a.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileNav.classList.remove("open");
      }),
    );
  }

  /* -----------------------------
       FALLBACK HERO INTRO ANIM
  ----------------------------- */
  window.addEventListener("load", () => {
    const heroTitle = document.querySelector(".hero h1");
    const heroLead = document.querySelector(".lead");
    const ctas = document.querySelector(".cta-row");
    const heroRight = document.querySelector(".hero-right");

    setTimeout(() => heroTitle?.classList.add("in-view"), 150);
    setTimeout(() => heroLead?.classList.add("in-view"), 300);
    setTimeout(() => ctas?.classList.add("in-view"), 450);
    setTimeout(() => heroRight?.classList.add("in-view"), 600);
  });
})();
