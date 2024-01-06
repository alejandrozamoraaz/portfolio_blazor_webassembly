document.addEventListener("DOMContentLoaded", function () {
    Fancybox.bind('[data-fancybox]', {
        dragToClose: false,
        Toolbar: {
            display: {
                left: ['close'],
                middle: [],
                right: [],
            },
        },
        Images: {
            zoom: false,
            protected: true,
        },
        Thumbs: {
            type: 'modern',
        },
        Carousel: {
            transition: false,
            friction: 0,
        },
        on: {
            'Carousel.ready Carousel.change': (fancybox) => {
                fancybox.container.style.setProperty(
                    '--bg-image',
                    `url("${fancybox.getSlide().thumbSrc}")`
                );
            },
        },
    });
});
