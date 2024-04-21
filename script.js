let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0; // Reset index to 0 when reaching the end
    } else {
        currentIndex = index;
    }
    const totalPossOff = 500 * 5;
    const offset = currentIndex * slides[0].offsetWidth;
    const offsetTodo = offset > totalPossOff ? totalPossOff : offset;
    document.querySelector('.carousel').style.transform = `translateX(${-1 * offsetTodo}px)`;
    console.log(slides)
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

setInterval(nextSlide, 10000000); // Auto rotate every 5 seconds
