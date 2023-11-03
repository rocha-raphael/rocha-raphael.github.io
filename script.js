document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById("carousel");
    const slides = carousel.querySelectorAll(".slide");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let currentSlideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    }

    function prevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    showSlide(currentSlideIndex);
});
