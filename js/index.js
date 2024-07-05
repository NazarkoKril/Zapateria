var buttons = document.querySelectorAll('.product__js button');
function makeActive(event) {
    buttons.forEach(function (button) {
        button.classList.remove('active__green');
    });
    event.target.classList.add('active__green');
}
buttons.forEach(function (button) {
    button.addEventListener('click', makeActive);
});



document.getElementById('search-btn').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('overlay').style.opacity = '1';
    document.querySelector('.search-container').style.display = 'flex';
});

document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('overlay').style.opacity = '0';
    setTimeout(function () {
        document.getElementById('overlay').style.display = 'none';
    }, 500);
    document.querySelector('.search-container').style.display = 'none';
});


document.addEventListener('DOMContentLoaded', function () {
    const menuBurger = document.querySelector('.menu__burger');
    const mobileMenu = document.querySelector('.mobile__menu');
    const closeMenu = document.querySelector('.close__menu');
    const catalogLink = document.querySelector('.menu-item-has-children > a');

    menuBurger.addEventListener('click', function () {
        mobileMenu.style.display = 'block';
        requestAnimationFrame(() => {
            mobileMenu.style.transform = 'translateX(0%)';
        });
    });

    closeMenu.addEventListener('click', function () {
        mobileMenu.style.transform = 'translateX(-100%)';
        setTimeout(() => mobileMenu.style.display = 'none', 300);
    });

    catalogLink.addEventListener('click', function () {
        this.parentElement.classList.toggle('open');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var dropdownBtn = document.querySelector('.dropdown-btn');
    var dropdownContent = document.querySelector('.dropdown-content3');
    var languageOptions = { 'ENG': 'ES', 'ES': 'ENG' };

    dropdownBtn.addEventListener('click', function (event) {
        dropdownContent.style.display = 'block';
        event.stopPropagation();
    });

    dropdownContent.addEventListener('click', function (event) {
        var selectedLanguage = event.target.textContent;
        dropdownBtn.textContent = selectedLanguage;
        dropdownContent.querySelector('button').textContent = languageOptions[selectedLanguage];
        dropdownContent.style.display = 'none';
    });

    document.addEventListener('click', function (event) {
        if (!event.target.matches('.dropdown-btn')) {
            dropdownContent.style.display = 'none';
        }
    });
});

const swiper2 = new Swiper(".bestsellers__swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 30,

    speed: 1000,
    breakpoints: {

        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        560: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        990: {
            slidesPerView: 3,
            spaceBetween: 30
        },

        1268: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        2400: {
            slidesPerView: 5,
            spaceBetween: 30
        }
    }
});

const swiper = new Swiper(".product__swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 30,

    speed: 1000,
    breakpoints: {

        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        560: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        990: {
            slidesPerView: 3,
            spaceBetween: 30
        },

        1268: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
});
const swiper1 = new Swiper(".review__swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 3,
    spaceBetween: 30,

    speed: 1000,
    breakpoints: {

        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },

        680: {
            slidesPerView: 2,
            spaceBetween: 30
        },

        1040: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});


