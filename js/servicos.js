const revealElements = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach(el => revealObserver.observe(el));

const clubeElements = document.querySelectorAll(".srv-clube-text, .srv-clube-img");

const clubeObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

clubeElements.forEach(el => clubeObserver.observe(el));