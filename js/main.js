
$(document).ready(function() {
  // Iniciando plugin de animación 
  var wow = new WOW({
    mobile: false,
  });
  wow.init();
  // Plugin slick para el primer slider tipo de piel
  $('.carru-tema1').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  });
  //  // Plugin slick para el segundo slider como protegerse del sol
  $('.carru-tema2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });
  // Funcion para scroll con las secciones de la landing
  $('a.go-to').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  // Función para que aparezaca por default en color de piel tipo 3 
  $('#piel3').addClass('opacity');
  $('#img-piel3,.color1,.color2,.color4,.color5,.color6').on('mouseover', function () {
    $('#piel3').removeClass('opacity');
  });
});
