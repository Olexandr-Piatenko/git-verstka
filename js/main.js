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

  $('.gallery__item').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		
	});
});