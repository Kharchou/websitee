document.addEventListener("DOMContentLoaded", function () {
  // Array of image filenames
  const images = [
    "https://cdn.glitch.global/7e04c109-bed7-42b3-9fc9-ebf6a7bcda80/Kharchou_1.png?v=1741635902302",
    "https://cdn.glitch.global/7e04c109-bed7-42b3-9fc9-ebf6a7bcda80/Kharchou_2.png?v=1741635911714",
    "https://cdn.glitch.global/7e04c109-bed7-42b3-9fc9-ebf6a7bcda80/Kharchou_3.png?v=1741635917085",
  ];

  // Pick a random image
  const randomImage = images[Math.floor(Math.random() * images.length)];

  // Set the image source
  document.getElementById("bio-image").src = randomImage;
});
