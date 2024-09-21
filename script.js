// Get the modal
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementsByClassName("close")[0];

// Add click event listener to all images
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = "flex";
        lightboxImg.src = image.src;
    });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', () => {
    lightbox.style.display = "none";
});

// Close the lightbox if you click outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});
