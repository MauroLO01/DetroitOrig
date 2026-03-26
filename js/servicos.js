const observeReveal = (elements, options = { threshold: 0.15 }) => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${Math.random() * 0.2}s`;
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, options);

  elements.forEach(el => observer.observe(el));
};

// Elementos genéricos
observeReveal(document.querySelectorAll("[data-reveal]"));

// Clube com threshold diferente
observeReveal(
  document.querySelectorAll(".srv-clube-text, .srv-clube-img"),
  { threshold: 0.2 }
);