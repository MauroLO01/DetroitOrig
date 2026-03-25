const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let sliderInterval = null;

function activateSlide(index) {
  if (!slides.length) return;

  slides.forEach(slide => {
    slide.classList.remove("active", "zoom");
  });

  const next = slides[index];

  if (!next) return;

  next.classList.add("active");

  void next.offsetWidth;

  next.classList.add("zoom");
}

function nextSlide() {
  if (!slides.length) return;

  currentSlide = (currentSlide + 1) % slides.length;
  activateSlide(currentSlide);
}

function startSlider() {
  if (!slides.length) return;

  activateSlide(currentSlide);
  sliderInterval = setInterval(nextSlide, 9000);
}

document.addEventListener("visibilitychange", () => {
  if (!slides.length) return; // 🛑 impede bug

  if (document.hidden) {
    clearInterval(sliderInterval);
  } else {
    sliderInterval = setInterval(nextSlide, 9000);
  }
});

startSlider();

const heroContent = document.querySelector(".hero-content, .srv-hero-content");

function handleParallax() {
  if (!heroContent) return;
  heroContent.style.setProperty("--parallax", `${window.scrollY * 0.2}px`);
}

const navbar = document.querySelector(".navbar");

function handleNavbarScroll() {
  if (!navbar) return;
  navbar.classList.toggle("scrolled", window.scrollY > 80);
}

let scrollTicking = false;

window.addEventListener("scroll", () => {
  if (!scrollTicking) {
    requestAnimationFrame(() => {
      handleParallax();
      handleNavbarScroll();
      scrollTicking = false;
    });
    scrollTicking = true;
  }
});

const animatedElements = document.querySelectorAll(
  ".servico, .assText, .mapa-container"
);

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach(el => observer.observe(el));