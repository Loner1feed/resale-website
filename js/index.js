

$('.header__toggler').click(function(){
  $(this).toggleClass('header__toggler--active');
  $('.header__nav').toggleClass('header__nav--open');
})


$('#product-slider-1').slick({
  slidesToShow: 2,
  sliderToScroll: 1,
  arrows: true,
  prevArrow: '<a href="javascript://" class="arrow arrow--prev"><span class="icon-chevron"></span></a>',
  nextArrow: '<a href="javascript://" class="arrow arrow--next"><span class="icon-chevron"></span></a>',
  responsive: [
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
})