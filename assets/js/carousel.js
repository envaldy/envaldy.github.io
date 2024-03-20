let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    const offset = -index * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
    currentIndex = index;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Swipe functionality
let touchstartX = 0;
let touchendX = 0;

const carousel = document.querySelector('.carousel');

carousel.addEventListener('touchstart', function(event) {
    touchstartX = event.touches[0].clientX;
});

carousel.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    if (touchstartX - touchendX > 50) {
        nextSlide();
    } else if (touchendX - touchstartX > 50) {
        prevSlide();
    }
}