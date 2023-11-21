window.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        highlightVisibleSection();
    });

    function highlightVisibleSection() {
        var sections = document.querySelectorAll("section");
        var scrollPosition = window.scrollY;
        var appbarHeight = document.querySelector(".top-bar").offsetHeight;
        var footerHeight = document.querySelector(".footer-bar").offsetHeight;
        var isMobilePortrait = window.innerWidth < 767;

        var bottomNavHeight = isMobilePortrait ? document.querySelector(".navigation-bar").offsetHeight : 0;

        var currentSection = Array.from(sections).find(function (section) {
            var top = section.offsetTop - appbarHeight;
            var bottom = top - bottomNavHeight - footerHeight + section.offsetHeight;

            return scrollPosition >= top && scrollPosition < bottom;
        });

        if (currentSection) {
            highlightMenuLink(currentSection.id);
        }
    }

    function highlightMenuLink(sectionId) {
        var links = document.querySelectorAll(".layout .navigation-bar .button");
        links.forEach(function (link) {
            link.classList.remove("active");
        });

        var currentLink = document.querySelector(`.layout .navigation-bar .button[id="#${sectionId}"]`);
        if (currentLink) {
            currentLink.classList.add("active");
        }
    }

    window.scrollToSection = function (section) {
        var element = document.getElementById(section);

        if (element) {
            var appbarHeight = document.querySelector(".top-bar").offsetHeight;

            window.scrollTo({
                top: element.offsetTop - appbarHeight,
                behavior: 'smooth'
            });
        }
    };
});
