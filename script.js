let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * slides[0].offsetWidth;
    document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
    console.log(slides)
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

setInterval(nextSlide, 3000); 
