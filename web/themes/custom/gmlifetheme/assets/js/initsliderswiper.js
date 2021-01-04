
(function ($, Drupal, drupalSettings) {
  Drupal.behaviors.initSliderSwiper =  {
    attach: function (context, settings) {
      $(document, context).once('initSliderSwiper').each( function() {
      // funtion to run only one time
      console.log('Init All - Slider - Swipper!');

      // Grab all elements SWIPER-SLIDER and init them
      var elementsSS = document.querySelectorAll('.type-swiper-slider');

      for (let i = 0; i < elementsSS.length; i++) {
        const element = elementsSS[i];

        //Grab values from data- attributes
        var elementData, parallaxSlider = false;
        var finalOptions = '{ ';

        if (element.hasAttribute("data-delay")) {
          elementData = element.getAttribute('data-delay');
          finalOptions += '"autoplay": { "delay": '+Number(elementData)+', "disableOnInteraction": false },'
        }

        if (element.hasAttribute("data-breakpoints")) {
          elementData = element.getAttribute('data-breakpoints');
          finalOptions += '"breakpoints":'+ elementData +','; ;
        }

        if (element.hasAttribute("data-direction")) {
          elementData = element.getAttribute('data-direction');
          finalOptions += '"direction":"'+ elementData +'",';
        }

        if (element.hasAttribute("data-effect")) {
          elementData = element.getAttribute('data-effect');
          finalOptions += '"effect":"'+ elementData +'",';
        }
        
        if (element.hasAttribute("data-loop")) {
          elementData = element.getAttribute('data-loop');
          finalOptions += '"loop":'+ elementData +',';
        }

        if (element.hasAttribute("data-slides-per-group")) {
          elementData = element.getAttribute('data-slides-per-group');
          finalOptions += '"slidesPerGroup":'+ elementData +',';
        }

        if (element.hasAttribute("data-space-between")) {
          elementData = element.getAttribute('data-space-between');
          finalOptions += '"spaceBetween":'+ elementData +',';
        }

        if (element.hasAttribute("data-pagination")) {
          elementData = element.getAttribute('data-pagination');
          finalOptions += '"pagination":{ "el": ".swiper-pagination", "clickable": true},';
        }

        if (element.hasAttribute("data-navigation")) {
          elementData = element.getAttribute('data-navigation');
          finalOptions += '"navigation":{ "nextEl": ".swiper-button-next", "prevEl": ".swiper-button-prev"},';
        }

        if (element.hasAttribute("data-speed")) {
          elementData = element.getAttribute('data-speed');
          finalOptions += '"speed":'+Number(elementData)+','
        }

        if (element.hasAttribute("data-parallax")) {
          elementData = element.getAttribute('data-parallax');
          finalOptions += '"parallax":'+ elementData +',';
          parallaxSlider = true;
        }

        if (element.hasAttribute("data-slides-per-view")) {
          elementData = element.getAttribute('data-slides-per-view');
          finalOptions += '"slidesPerView":'+ elementData +'';
        } else {
          finalOptions += '"slidesPerView": 1';
        }

        finalOptions +=' }';


        //insert parralax atribute..
        if (parallaxSlider) {

          console.log("on parallaxSlider ++");

            var elementsSlide = element.querySelectorAll('.swiper-slide-parallax');
            var dataParallax = -100;

            for (let i = 0; i < elementsSlide.length; i++) {
              const elementDivs = elementsSlide[i].getElementsByClassName('field__item');

                for (let e = elementDivs.length-1; e >= 0; e--) {
                  const elementParallax = elementDivs[e];
                  elementParallax.setAttribute("data-swiper-parallax",dataParallax );
                  dataParallax -= 100;
                  
                }
            }

            
        }

        //console.log("finalOptions = "+finalOptions);

       //init SWIPER - current Element and his options
        var obj = JSON.parse(finalOptions);
        var mySwiper = new Swiper(element, obj);


      }//end for elements


      });
    }
  }
  } (jQuery, Drupal, drupalSettings));

/*
(function () {

  'use strict';

  Drupal.behaviors.initSliderSwiper = {
    attach: function (context) {
      console.log('Init - Slider - Swipper!');

      //Grab values from data- attributes

      var element = document.querySelector('.type-swiper-slider');
      var elementData, parallaxSlider = false;
      var finalOptions = '{ ';


      if (element.hasAttribute("data-delay")) {
        elementData = element.getAttribute('data-delay');
        finalOptions += '"autoplay": { "delay": '+Number(elementData)+', "disableOnInteraction": false },'
      }

      if (element.hasAttribute("data-breakpoints")) {
        elementData = element.getAttribute('data-breakpoints');
        finalOptions += '"breakpoints":'+ elementData +','; ;
      }

      if (element.hasAttribute("data-direction")) {
        elementData = element.getAttribute('data-direction');
        finalOptions += '"direction":"'+ elementData +'",';
      }

      if (element.hasAttribute("data-effect")) {
        elementData = element.getAttribute('data-effect');
        finalOptions += '"effect":"'+ elementData +'",';
      }
      

      if (element.hasAttribute("data-loop")) {
        elementData = element.getAttribute('data-loop');
        finalOptions += '"loop":'+ elementData +',';
      }

      if (element.hasAttribute("data-slides-per-group")) {
        elementData = element.getAttribute('data-slides-per-group');
        finalOptions += '"slidesPerGroup":'+ elementData +',';
      }



      if (element.hasAttribute("data-space-between")) {
        elementData = element.getAttribute('data-space-between');
        finalOptions += '"spaceBetween":'+ elementData +',';
      }

      if (element.hasAttribute("data-pagination")) {
        elementData = element.getAttribute('data-pagination');
        finalOptions += '"pagination":{ "el": ".swiper-pagination", "clickable": true},';
      }

      if (element.hasAttribute("data-navigation")) {
        elementData = element.getAttribute('data-navigation');
        finalOptions += '"navigation":{ "nextEl": ".swiper-button-next", "prevEl": ".swiper-button-prev"},';
      }

      if (element.hasAttribute("data-speed")) {
        elementData = element.getAttribute('data-speed');
        finalOptions += '"speed":'+Number(elementData)+','
      }

      if (element.hasAttribute("data-parallax")) {
        elementData = element.getAttribute('data-parallax');
        finalOptions += '"parallax":'+ elementData +',';
        parallaxSlider = true;
      }

      if (element.hasAttribute("data-slides-per-view")) {
        elementData = element.getAttribute('data-slides-per-view');
        finalOptions += '"slidesPerView":'+ elementData +'';
      } else {
        finalOptions += '"slidesPerView": 1';
      }

      finalOptions +=' }';


      //insert parralax atribute..
      if (parallaxSlider) {

        console.log("on parallaxSlider ++");

          var elementsSlide = document.querySelectorAll('.swiper-slide-parallax');
          var dataParallax = -100;

          for (let i = 0; i < elementsSlide.length; i++) {
            const elementDivs = elementsSlide[i].getElementsByClassName('field__item');

              for (let e = elementDivs.length-1; e >= 0; e--) {
                const elementParallax = elementDivs[e];
                elementParallax.setAttribute("data-swiper-parallax",dataParallax );
                dataParallax -= 100;
                
              }
          }

          
      }

      //console.log("finalOptions = "+finalOptions);


      var obj = JSON.parse(finalOptions);

      var mySwiper = new Swiper('.type-swiper-slider', obj)


      // var mySwiper = new Swiper('.type-swiper-slider', {
      //   // Optional parameters

      //   // direction: 'horizontal',
      //   //loop: true,
      //   effect: 'fade',
      //   speed: 600,
      //   centeredSlides: true,
      //   autoplay: {
      //     delay: 2000,
      //     disableOnInteraction: false,
      //   },

      //   fadeEffect: {
      //     crossFade: true,
      //   },

      
      //   // If we need pagination
      //   // pagination: {
      //   //   el: '.swiper-pagination',
      //   // },
      
      //   // Navigation arrows
      //   // navigation: {
      //   //   nextEl: '.swiper-button-next',
      //   //   prevEl: '.swiper-button-prev',
      //   // },
      
      //   // And if we need scrollbar
      //   // scrollbar: {
      //   //   el: '.swiper-scrollbar',
      //   // },
      // })

    }
  };

})(jQuery, Drupal);

*/
