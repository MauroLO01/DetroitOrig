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