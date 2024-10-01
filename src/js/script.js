
window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('on-scroll');
    } else {
        header.classList.remove('on-scroll');
    }
});


const banners = ["../images/banner-produtos.svg", "../images/banner-produtos2.png", "../images/banner-produtos3.png"];

let bannerIndex = 0;

function changeBanner() {
    bannerIndex = (bannerIndex + 1) % banners.length;
    document.querySelector('.products-banner-img').src = banners[bannerIndex];
}

setInterval(changeBanner, 3000);
