const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function startSlider() {
  if (!slides.length) return;

  slides[currentSlide].classList.add("active");

  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 9000);
}

startSlider();

const heroContent = document.querySelector(".hero-content");

function handleParallax() {
  if (!heroContent) return;
  heroContent.style.setProperty("--parallax", `${window.scrollY * 0.2}px`);
}

window.addEventListener("scroll", handleParallax);

const animatedElements = document.querySelectorAll(
  ".servico-card, .assText, .mapa-container"
);

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // evita processamento desnecessário
      }
    });
  },
  {
    threshold: 0.2
  }
);

animatedElements.forEach(el => observer.observe(el));

const navbar = document.querySelector(".navbar");

function handleNavbarScroll() {
  if (!navbar) return;
  navbar.classList.toggle("scrolled", window.scrollY > 80);
}

window.addEventListener("scroll", handleNavbarScroll);