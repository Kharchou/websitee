const menuItems = document.querySelectorAll('.menu-item');
const rightContent = document.querySelector('.right-content');

const images = {
    film: [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg'
    ],
    'video-installation': [
        'video1.jpg',
        'video2.jpg',
        'video3.jpg'
    ],
    prints: [
        'print1.jpg',
        'print2.jpg',
        'print3.jpg'
    ]
};

menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (e) => {
        e.preventDefault();
        const category = menuItem.getAttribute('data-category');
        const imagesHtml = images[category].map((image) => {
            return `<img src="${image}" alt="">`;
        }).join('');
        rightContent.innerHTML = imagesHtml;
    });
});