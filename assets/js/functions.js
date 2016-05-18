/*----------------------------- Navigation --------------------------*/
jQuery(window).bind('scroll', function (){
  if (jQuery(window).scrollTop() > 500){
    jQuery('#main-menu').addClass('mini-nav').removeClass('topnavbar').slideDown(500);
    jQuery('#page-top').addClass('bodytopmargin').removeClass('bodynomargin');
  } else {
    jQuery('#main-menu').removeClass('mini-nav').addClass('topnavbar').slideDown(500);
    jQuery('#page-top').removeClass('bodytopmargin').addClass('bodynomargin');
  }
});


   $(window).on('scroll', function($){
    "use strict";


    /*------------- Scroll to Top -----------------*/
      // Scroll to top
      if (jQuery(this).scrollTop() > 100) {
        jQuery('#scroll-to-top').fadeIn('slow');
      } else {
        jQuery('#scroll-to-top').fadeOut('slow');
      }
    });


   if ($(this).scrollTop() > 100) {
    $('.post-navigation').fadeIn('slow');
  } else {
    $('.post-navigation').fadeOut('slow');
  }




  $('#scroll-to-top').click(function(){
    $("html,body").animate({ scrollTop: 0 }, 1500);
    return false;
  });


  /*------------------- Parallax ------------------*/
  jQuery(window).load(function(){
    $(".top-slider").parallax("50%", 0.5);
    $(".page-name-sec").parallax("50%", 0.5);
    $(".our-facts").parallax("50%", 0.5);
    $(".client-quote").parallax("50%", 0.5);
    $(".latest-tweet").parallax("50%", 0.5);
  });




  jQuery(document).ready(function($) {

    "use strict";

    $('#menu').slicknav();


    /*-------------- Menu Search Box ----------------*/

  //open search form
  $('.cd-search-trigger').on('click', function(event){
    event.preventDefault();
    toggleSearch();
  });


  function toggleSearch(type) {
    if(type=="close") {
      //close serach 
      $('.cd-search').removeClass('is-visible');
      $('.cd-search-trigger').removeClass('search-is-visible');
      $('.cd-overlay').removeClass('search-is-visible');
    } else {
      //toggle search visibility
      $('.cd-search').toggleClass('is-visible');
      $('.cd-search-trigger').toggleClass('search-is-visible');
      $('.cd-overlay').toggleClass('search-is-visible');

      ($('.cd-search').hasClass('is-visible')) ? $('.cd-overlay').addClass('is-visible') : $('.cd-overlay').removeClass('is-visible') ;
    }
  }



  // NiceScroll
  //==================================================================================
    //Check IE11
    function IEVersion() {
      if (!!navigator.userAgent.match(/Trident\/7\./)) {
        return 11;
      }
    }

    if (IEVersion() != 11) 
    {
      $('html').niceScroll({
        cursorcolor: "#1A212C",
        zindex: '99999',
        cursorminheight: 60,
        scrollspeed: 80,
        cursorwidth: 7,
        autohidemode: true,
        background: "#aaa",
        cursorborder: 'none',
        cursoropacitymax: .7,
        cursorborderradius: 0,
        horizrailenabled: false
      });
    };


    // LAZYLOAD TRIGGER START
    $("img.lazy").lazyload({threshold : 200, effect : "fadeIn"});




    /*------------  Skill Progress bar  ---------------*/
    $( '.progress-bar' ).each(function() { 
      var  barWidth = $(this).data('progress-value');
      $(this).css({
        'width': barWidth
      });
    });



    /*--------------------------  Portfolio -----------------------*/
    (function ($) {
      "use strict";
      var $container = $('#works-item'),
      colWidth = function () {
        var w = $container.width(), 
        columnNum = 1,
        columnWidth = 0;
        if (w > 960) {
          columnNum  = 3;
        }  
        else if (w > 640) {
          columnNum  = 2;
        }  
        else if (w > 360) {
          columnNum  = 2;
        } 
        columnWidth = Math.floor(w/columnNum);
        $container.find('.item').each(function() {
          var $item = $(this),
          multiplier_w = $item.attr('class').match(/item-w(\d)/),
          multiplier_h = $item.attr('class').match(/item-h(\d)/),
          width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
          height = multiplier_h ? columnWidth*multiplier_h[1]*0.7-10 : columnWidth*0.7-5;
          $item.css({
            width: width,
            height: height
          });
        });
        return columnWidth;
      },
      isotope = function () {
        $container.isotope({
          resizable: true,
          itemSelector: '.item',
          masonry: {
            columnWidth: colWidth(),
            gutterWidth: 10
          }
        });
      };
      isotope();
      $(window).smartresize(isotope);

      $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
          }
        });
        return false;
      }); 
    }
    (jQuery)
    );



/*--------------------------  Portfolio-2 -----------------------*/
(function ($) {
  "use strict";

  var $container = $('#works-item-2'),
  colWidth = function () {
    var w = $container.width(), 
    columnNum = 1,
    columnWidth = 0;
    if (w > 960) {
      columnNum  = 4;
    } 
    else if (w > 640) {
      columnNum  = 3;
    }  
    else if (w > 360) {
      columnNum  = 2;
    } 
    columnWidth = Math.floor(w/columnNum);
    $container.find('.item').each(function() {
      var $item = $(this),
      multiplier_w = $item.attr('class').match(/item-w(\d)/),
      multiplier_h = $item.attr('class').match(/item-h(\d)/),
      width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
      height = multiplier_h ? columnWidth*multiplier_h[1]*0.65-10 : columnWidth*0.7-10;
      $item.css({
        width: width,
        height: height
      });
    });
    return columnWidth;
  },
  isotope = function () {
    $container.isotope({
      resizable: true,
      itemSelector: '.item',
      masonry: {
        columnWidth: colWidth(),
        gutterWidth: 10
      }
    });
  };
  isotope();
  $(window).smartresize(isotope);

  $('.portfolioFilter a').click(function(){
    $('.portfolioFilter .current').removeClass('current');
    $(this).addClass('current');

    var selector = $(this).attr('data-filter');
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    return false;
  }); 
}
(jQuery)
);



/*------------------- Quote Slider  --------------*/
var quoteSlider = $("#quote-slider");

quoteSlider.owlCarousel({
  autoPlay : 3000,
  stopOnHover : true,
  pagination : true,
  paginationNumbers: false,

  itemsCustom : [
  [0, 1],
  [320, 1],
  [450, 1],
  [600, 1],
  [700, 1],
  [1000, 1],
  [1200, 1],
  ],
        // Responsive 
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window
      });




/*------------------- Team Member Slider  --------------*/
var teamSlider = $("#testimonial-slider");

teamSlider.owlCarousel({
  autoPlay : 3000,
  stopOnHover : true,
  pagination : true,
  paginationNumbers: false,

  itemsCustom : [
  [0, 1],
  [320, 1],
  [450, 1],
  [600, 1],
  [700, 2],
  [1000, 2],
  [1200, 2],
  ],
        // Responsive 
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window
      });



/*------------------- Team Member Slider  --------------*/
var teamSlider = $("#client-slider");

teamSlider.owlCarousel({
  autoPlay : 3000,
  stopOnHover : true,
  pagination : true,
  paginationNumbers: false,

  itemsCustom : [
  [0, 2],
  [320, 1],
  [450, 2],
  [600, 3],
  [700, 3],
  [1000, 4],
  [1200, 5],
  ],
        // Responsive 
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window
      });




/*------------------- Similar Project Slider  --------------*/
var teamSlider = $("#similar-project-slider");

teamSlider.owlCarousel({
  autoPlay : 3000,
  stopOnHover : true,
  pagination : true,
  paginationNumbers: false,

  itemsCustom : [
  [0, 1],
  [450, 2],
  [600, 3],
  [700, 4],
  [1000, 5],
  [1200, 5],
  ],
        // Responsive 
        responsive: true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth: window
      });
});