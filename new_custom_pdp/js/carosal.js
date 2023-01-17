(function ($, Drupal) {
    Drupal.behaviors.myModuleBehavior = {
      attach: function (context, settings) {
  
        $(document).ready(function() {
            $('.field--name-field-product').addClass('owl-carousel');
            $('.owl-carousel').owlCarousel({
               loop: true,
                    items: 1,
                    slideSpeed: 2000,
                    autoplay: true,
                    thumbs: true,
                    thumbImage: true,
                    thumbContainerClass: 'owl-thumbs',
                    thumbItemClass: 'owl-thumb-item'
               });
        })
      }
    };
  })(jQuery, Drupal, drupalSettings );