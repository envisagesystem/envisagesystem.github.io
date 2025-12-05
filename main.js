// Scroll Reveal Animation
const q = (sel, el = document) => Array.from(el.querySelectorAll(sel));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in-view");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);

q(".hero h1, .lead, .cta-row, .hero-right, .service-card, .chip, .card-light, .card-muted, .contact-box").forEach(
  (el) => observer.observe(el),
);

q(".check").forEach((el, i) => {
  setTimeout(() => observer.observe(el), i * 120);
});

// Mobile Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("open");
});

q(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileNav.classList.remove("open");
  });
});
