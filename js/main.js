$(function(){
  $('.reviews__inner').slick({
    dots: false,
    
    autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  
  slidesToShow: 1,
  prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../images/Arrow-left.svg"></button>',
  nextArrow:'<button type="button" class="slick-btn slick-next"><img src="../images/Arrow-right.svg"></button>',

  });

  
});