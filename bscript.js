document.addEventListener("DOMContentLoaded", function () {
    // Array of image filenames
    const images = ["bio1.jpg", "bio2.jpg", "bio3.jpg"];

    // Pick a random image
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // Set the image source
    document.getElementById("bio-image").src = randomImage;
});
