document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    let intervalId;

    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
        });
    }

    function nextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            clearInterval(intervalId); // Stop the slider
            setTimeout(() => {
                currentIndex = 0;
                updateSlider();
            }, 1000); // Wait for 3 seconds before resetting to the first slide
            return;
        }
        updateSlider();
    }

    intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Initialize the slider position
    updateSlider();
});

// ###############################################################
function functio(small) {
    var full = document.getElementById("imagebox")
    full.src = small.src
}


// ###############################################################

let nav = document.querySelector("nav");
let menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
    if (nav.style.left === "0px") {
        nav.style.left = "-800px";
    } else {
        nav.style.left = "0px";
    }
    menu.classList.toggle("active");
});