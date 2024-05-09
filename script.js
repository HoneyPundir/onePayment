// Get the DOM elements for the image carousel
const wrapper = document.querySelector(".wrapper"),
    carousel = document.querySelector(".carousel"),
    images = document.querySelectorAll(".slider-img");

let imageIndex = 0,
    intervalId;

// Define function to start automatic image slider
const autoSlide = () => {
    // Start the slideshow by calling slideImage() every 2 seconds
    intervalId = setInterval(() => {
        slideImage(++imageIndex);
    }, 2000);
};
// Call autoSlide function on page load
autoSlide();

// A function that updates the carousel display to show the specified image
const slideImage = (index) => {
    // Calculate the updated image index
    imageIndex = index >= images.length ? 0 : index;
    // Update the carousel display to show the specified image
    carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

// Add mouseover event listener to wrapper element to stop auto sliding
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
// Add mouseleave event listener to wrapper element to start auto sliding again
wrapper.addEventListener("mouseleave", autoSlide);
