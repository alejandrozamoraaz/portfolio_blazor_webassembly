//document.addEventListener("DOMContentLoaded", function () {
window.configureCarousel = function () {
    const projectItems = document.querySelectorAll(".carousel-projects");
    projectItems.forEach((projectItem) => {
        new Carousel(projectItem, {
            Navigation: {
                prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 5l-7 7 7 7"/><path d="M4 12h16"/></svg>',
                nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 12h16"/><path d="M13 5l7 7-7 7"/></svg>',
            },
            infinite: true,
            center: false,
            slidesPerPage: 'auto',
            transition: false,
        });
    });

    const projectImagesItems = document.querySelectorAll(".carousel-project-images");
    projectImagesItems.forEach((projectImageItem) => {
        new Carousel(projectImageItem, {});
    });
};

//});
