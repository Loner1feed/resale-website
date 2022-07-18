

$(document).ready(function() {

  $('.header__toggler').click(function(){
    $(this).toggleClass('header__toggler--active');
    $('body').toggleClass('locked');
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


  // colorr change logics
  let colorItem = $('.colorBlock__item')

  colorItem.each((index, el) => {
    if($(el).attr('class').includes('colorBlock__item--active')) {
      console.log('yes')
      let attr = $(el).attr('data-title');
      $('.colorBlock__heading span').append(attr)
    }
  });

  colorItem.click(function() {
    if(!$(this).attr('class').includes('colorBlock__item--active')) {
      colorItem.removeClass('colorBlock__item--active');
      $(this).addClass('colorBlock__item--active');
      let attr = $(this).attr('data-title');
      let currentHeading = $('.colorBlock__heading span').text();
      $('.colorBlock__heading span').text($(".colorBlock__heading span").text().replace(currentHeading, attr));
    }
  })

  // input type number logics
  jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><span class="icon-chevron"><span/></div><div class="quantity-button quantity-down"><span class="icon-chevron"><span/></div></div>').insertAfter('.quantity input');
  jQuery('.quantity').each(function() {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });


  // gallery logics
  $('.gallerySlider__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.gallerySlider__nav',
    // vertical: true
    responsive: [
      {
        breakpoint: 800,
        settings: {
          dots: true
        }
      }
    ]
  });
  $('.gallerySlider__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.gallerySlider__for',
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
  });


  // product description logics 

  // $(window).resize(function() {
  //   if($(window).width() > '620') {
  //     $('.productDesc section p').each((index, el) => {
  //       if(el.attr('style') == 'display: none;') {
  //         $(el).slideDown();
  //       }
  //     })
  //   }
  // })

  $('.productDesc section h5').click(function() {
    if($(window).width() <= '620') {
      $(this).siblings('p').slideToggle();
      $(this).children('.productDesc__plus').toggleClass('productDesc__plus--minus')
    }
  })


  // custom select logics 
  $( "#salutation" ).selectmenu();

  // filter option logics 
  $('.filter__heading').click(function() {
    $(this).siblings('.filter__content').slideToggle();
    $(this).children('.filter__plus').toggleClass('filter__plus--minus')
  })

  // range slider 
  $( ".slider-range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });


  // color item 
  $('.filter__color').click(function(){
    if($(this).attr('class').includes('filter__color--active')) {
      $(this).removeClass('filter__color--active')
    } else {
      $(this).addClass('filter__color--active')
    }
  })



  $('.popupQuickLook__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    fade: true,
  })


  $('.item__hoverBadge').click(function() {
    $('.popups').addClass('popups--open');
  })

  $('.popupQuickLook__close').click(function() {
    $('.popups').removeClass('popups--open');
  })



  $('.catalogContent__filterBtn').click(function() {
    $('.filter').addClass('filter--open');
    $('body').addClass('locked');
  })

  $('.filter__close').click(function() {
    $('.filter').removeClass('filter--open');
    $('body').removeClass('locked');
  })
})