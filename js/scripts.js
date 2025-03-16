let slideIndex = 0;
const slides = document.querySelectorAll('.slides');
const slideInterval = 8000; // 8 seconds per slide
const fadeDuration = 1500; // Matches CSS transition duration (1.5 seconds)

function showSlides() {
    slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === slideIndex) {
        slide.classList.add('active');
    }
    });
    slideIndex = (slideIndex + 1) % slides.length; // Move to the next slide
    setTimeout(showSlides, slideInterval - fadeDuration); // Overlap transition time
}

function plusSlides(n) {
    slideIndex = (slideIndex + n - 1 + slides.length) % slides.length;
    // slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}

// Start the slideshow
showSlides();

