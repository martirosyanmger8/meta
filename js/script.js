const swiper = new Swiper('.consultation-holder-slider', {
    effect: 'fade',  // Эффект плавного перехода
    fadeEffect: {
        crossFade: true,  // Плавное перекрытие
    },
    loop: true,  // Бесконечная прокрутка
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});