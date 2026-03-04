const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

if (slides.length > 0) {
    slides[0].classList.add('active');

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}

window.addEventListener('scroll', () => {
    const heroText = document.querySelector('.hero-content');
    heroText.style.setProperty('--parallax', `${window.scrollY * 0.2}px`);
});

const Elements = document.querySelectorAll(".servico-card, .assText, .mapa-container");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

Elements.forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("scrolled", window.scrollY > 80);
});