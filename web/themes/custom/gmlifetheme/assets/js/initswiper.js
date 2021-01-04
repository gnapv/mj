(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.initSwiper =  {
    attach: function (context, settings) {
      $(document, context).once('initSwiper').each( function() {
      // funtion to run only one time
      console.log('Init All - Caroucel - Background - Swipper!');

            // Grab all elements SWIPER-SLIDER and init them
            var elementsSS = document.querySelectorAll('.type-swiper-background');

            for (let i = 0; i < elementsSS.length; i++) {
              const element = elementsSS[i];


              var   elementDelay = element.getAttribute('data-delay'),
              elementSpeed = element.getAttribute('data-speed');
  
  
              var mySwiper = new Swiper( element, {
                // Optional parameters
        
                // direction: 'horizontal',
                //loop: true,
                effect: 'fade',
                speed: Number(elementSpeed),
                centeredSlides: true,
                autoplay: {
                  delay: Number(elementDelay),
                  disableOnInteraction: false,
                },
        
                fadeEffect: {
                  crossFade: true,
                }
              
              })
      
      }//end loop

    });
  }
}
} (jQuery, Drupal, drupalSettings));

/*

(function () {

  'use strict';

  Drupal.behaviors.initSwiper = {
    attach: function (context) {
      console.log('Init Swipper!!');

      //Grab values from data- attributes

      var element = document.querySelector('.type-swiper-background');
      var   elementDelay = element.getAttribute('data-delay'),
            elementSpeed = element.getAttribute('data-speed');


      var mySwiper = new Swiper('.type-swiper-background', {
        // Optional parameters

        // direction: 'horizontal',
        //loop: true,
        effect: 'fade',
        speed: Number(elementSpeed),
        centeredSlides: true,
        autoplay: {
          delay: Number(elementDelay),
          disableOnInteraction: false,
        },

        fadeEffect: {
          crossFade: true,
        },
      
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        // Navigation arrows
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })
    }
  };

})(jQuery, Drupal);

*/
