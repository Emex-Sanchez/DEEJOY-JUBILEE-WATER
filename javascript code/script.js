document.getElementById('hamburger').addEventListener('click', function () {
    var navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
});

// gallery slide function

document.addEventListener("DOMContentLoaded", () => {
    const gallerySlides = document.querySelectorAll('.gallery .slide');
    const galleryIndicators = document.querySelectorAll('.gallery .indicator');
    const galleryPrev = document.getElementById('prev');
    const galleryNext = document.getElementById('next');
    let galleryCurrentIndex = 0;
    const gallerySlideCount = gallerySlides.length;
    let galleryInterval;

    function updateGallerySlider(index) {
        galleryCurrentIndex = index;
        const offset = -galleryCurrentIndex * 100;
        document.querySelector('.gallery .slides').style.transform = `translateX(${offset}%)`;
        galleryIndicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === galleryCurrentIndex);
        });
    }

    function moveToGallerySlide(index) {
        if (index >= gallerySlideCount) {
            galleryCurrentIndex = 0;
        } else if (index < 0) {
            galleryCurrentIndex = gallerySlideCount - 1;
        } else {
            galleryCurrentIndex = index;
        }
        updateGallerySlider(galleryCurrentIndex);
    }

    galleryNext.addEventListener('click', () => {
        moveToGallerySlide(galleryCurrentIndex + 1);
        resetGalleryInterval();
    });

    galleryPrev.addEventListener('click', () => {
        moveToGallerySlide(galleryCurrentIndex - 1);
        resetGalleryInterval();
    });

    galleryIndicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            moveToGallerySlide(i);
            resetGalleryInterval();
        });
    });

    function startGalleryInterval() {
        galleryInterval = setInterval(() => {
            moveToGallerySlide(galleryCurrentIndex + 1);
        }, 3000); 
    }

    function resetGalleryInterval() {
        clearInterval(galleryInterval);
        startGalleryInterval();
    }

    // Initialize gallery slider
    moveToGallerySlide(galleryCurrentIndex);
    startGalleryInterval();


});





// Testimonial Carousel Slider+++++++++++++++++++++++++++++++++++
const t_sl = document.querySelector('.t_sl');
const slideCount = document.querySelectorAll('.testimonial-slide').length;
const slideWidth = 100; // percentage
let currentIndex = 0;

document.getElementById('testimonialNext').addEventListener('click', function () {
    moveToSlide(currentIndex + 1);
});

document.getElementById('testimonialPrev').addEventListener('click', function () {
    moveToSlide(currentIndex - 1);
});

function moveToSlide(index) {
    if (index >= slideCount) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slideCount - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * slideWidth;
    t_sl.style.transform = `translateX(${offset}%)`;
}

// Initialize slider
moveToSlide(currentIndex);





