$('.slider-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
})
$('.slider-nav').slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  asNavFor: '.slider-main',
  // centerMode: true,
  focusOnSelect: true,
  arrows: true,
  vertical: true,
  prevArrow: '<img class="slider-nav__arrow-prev" src="./build/images/svg/arrow_down.svg" alt="#">',
  nextArrow: '<img class="slider-nav__arrow-next" src="./build/images/svg/arrow_down.svg" alt="#">',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        vertical: false,
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
  ]
});