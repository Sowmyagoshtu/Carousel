let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    
    if (index >= totalSlides) {
        currentSlide = 0; // Go back to the first slide
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Go to the last slide
    } else {
        currentSlide = index;
    }
    
    const offset = -currentSlide * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// Initialize the carousel
showSlide(currentSlide);

// Optional: Automatically slide every 5 seconds
// setInterval(nextSlide, 5000);
