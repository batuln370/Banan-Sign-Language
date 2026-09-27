// On page load or when changing themes, best to add inline in `head` to avoid FOUC

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {

    document.documentElement.classList.add('dark');

} else {

    document.documentElement.classList.remove('dark')

};





var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');

var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {

    themeToggleLightIcon.classList.remove('hidden');

} else {

    themeToggleDarkIcon.classList.remove('hidden');

}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button

    themeToggleDarkIcon.classList.toggle('hidden');

    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously

    if (localStorage.getItem('color-theme')) {

        if (localStorage.getItem('color-theme') === 'light') {

            document.documentElement.classList.add('dark');

            localStorage.setItem('color-theme', 'dark');

        } else {

            document.documentElement.classList.remove('dark');

            localStorage.setItem('color-theme', 'light');

        }

        // if NOT set via local storage previously

    } else {

        if (document.documentElement.classList.contains('dark')) {

            document.documentElement.classList.remove('dark');

            localStorage.setItem('color-theme', 'light');

        } else {

            document.documentElement.classList.add('dark');

            localStorage.setItem('color-theme', 'dark');

        }

    }

});



// ================================================

// START SCROLLREVEAL

// ================================================



// إعدادات عامة

const sr = ScrollReveal({

    reset: false,

    distance: '50px',

    duration: 800,

    easing: 'ease-in-out',

    opacity: 0,

    viewFactor: 0.2,

});



// ================================================

// HERO SECTION

// ================================================

sr.reveal('.hero-right', {

    delay: 200,

    origin: 'right',

});

sr.reveal('.hero-left', {

    delay: 400,

    origin: 'top',

});



// ================================================

// ABOUT SECTION

// ================================================

sr.reveal('.about-info', {

    origin: 'right',

});

sr.reveal('.about-image-all', {

    origin: 'right',

    delay: 200,

});



// كروت مميزات قسم About

sr.reveal('.about-image-all .grid > div', {

    origin: 'bottom',

    interval: 150,

    distance: '30px',

});



// ================================================

// COURSES SECTION

// ================================================

sr.reveal('.courses-section .header-section', {

    origin: 'top',

    distance: '30px',

});

sr.reveal('.course', {

    origin: 'bottom',

    interval: 120,

    distance: '40px',

    duration: 700,

});



// ================================================

// TRAINERS SECTION

// ================================================

// عنوان قسم المعلمين

sr.reveal('.trained-section .header-section', {

    origin: 'top',

    distance: '30px',

    duration: 700,

});



// كروت المعلمين

sr.reveal('.trained', {

    origin: 'bottom',

    interval: 150,

    distance: '40px',

    duration: 700,

});



// صندوق "لدينا المزيد من المدربين"

sr.reveal('.other-trained', {

    origin: 'bottom',

    distance: '30px',

    delay: 200,

    duration: 700,

});



// ================================================

// ARTICLES SECTION

// ================================================

sr.reveal('.articles-section .header-section', {

    origin: 'top',

    distance: '30px',

});

sr.reveal('#articles-carousel', {

    origin: 'bottom',

    distance: '50px',

    delay: 150,

});



// ================================================

// FAQ SECTION

// ================================================

sr.reveal('.faq-section .header-section', {

    origin: 'right',

    distance: '40px',

});

sr.reveal('.faq-content', {

    origin: 'right',

    distance: '50px',

    delay: 150,

});

sr.reveal('.faq-image', {

    origin: 'left',

    distance: '50px',

    delay: 250,

});



// ================================================

// NEWSLETTER SECTION

// ================================================

sr.reveal('.newsletter-image', {

    origin: 'left',

    distance: '60px',

});

sr.reveal('.newsletter-content', {

    origin: 'right',

    distance: '60px',

    delay: 150,

});



// ================================================

// FOOTER

// ================================================

sr.reveal('footer > .container > div:first-child > div', {

    origin: 'bottom',

    interval: 120,

    distance: '30px',

    duration: 600,

});

sr.reveal('footer > .container > div:last-child', {

    origin: 'bottom',

    distance: '20px',

    delay: 150,

    duration: 600,

});



// ================================================

// END SCROLLREVEAL

// ================================================













// ================================================
// SWIPER: الكورسات الأخرى
// ================================================

const otherCoursesSwiper = new Swiper('.other-courses-swiper', {
    slidesPerView: 1,
    spaceBetween: 16,

    navigation: {
        nextEl: '.other-courses-swiper .swiper-button-next',
        prevEl: '.other-courses-swiper .swiper-button-prev',
    },

    breakpoints: {
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
    },
});