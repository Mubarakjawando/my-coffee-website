/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

sr.reveal('.hero__text, .about__text, .special__texttopic, .product__topic, .review h1, footer',{}); 
sr.reveal('.hero__btn, .about__btn1, .special__textcard1, .product__card, .review .review_box, .footer__text',{delay: 400}); 
sr.reveal('.hero__btn2, .about__btn2, .special__textcard2, .product__box, .footer__menu',{interval: 200});
