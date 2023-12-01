document.addEventListener("DOMContentLoaded", function () {
    //const container = document.querySelector(".f-carousel");
    //const options = { infinite: true };

    //new Carousel(container, options);

    Fancybox.bind('[data-fancybox]', {
        Images: {
            protected: true,
            zoom: true
        },
        Slideshow: {
            playOnStart: true
        },
        Thumbs: {
            type: "modern"
        },
        //Carousel: {
        //    infinite: true,
        //},
        //Images: {
        //    zoom: true,
        //},
        //loop: true,
        zoom: {
            enabled: true, 
            duration: 300, 
            easing: "ease-in-out",
        }
        //transitionEffect: "slide",
        //buttons: ["slideShow", "fullScreen", "thumbs", "close"]
    });  

    //window.configureCarousel = function () {

    //    $("[data-fancybox]").fancybox({
    //        // Opciones de configuración, si las necesitas
    //        loop: true, // Repetir la galería al llegar al final
    //        transitionEffect: "slide", // Efecto de transición entre las imágenes
    //        buttons: ["slideShow", "fullScreen", "thumbs", "close"],
    //    });

    //    $('.carousel').slick({
    //        slidesToShow: 3,
    //        slidesToScroll: 1,
    //        dots: true,
    //        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    //        nextArrow: '<button type="button" class="slick-next">Next</button>',
    //        responsive: [
    //            {
    //                breakpoint: 1024,
    //                settings: {
    //                    slidesToShow: 3,
    //                    slidesToScroll: 3,
    //                    infinite: true,
    //                    dots: true
    //                }
    //            },
    //            {
    //                breakpoint: 600,
    //                settings: {
    //                    slidesToShow: 2,
    //                    slidesToScroll: 2
    //                }
    //            },
    //            {
    //                breakpoint: 480,
    //                settings: {
    //                    slidesToShow: 1,
    //                    slidesToScroll: 1
    //                }
    //            }
    //        ]
    //    });
    //};
});
