document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var sections = document.querySelectorAll("section");
        var scrollPosition = window.scrollY;

        var currentSection = Array.from(sections).find(function (section) {
            var top = section.offsetTop;
            var bottom = top + section.offsetHeight;
            return scrollPosition >= top && scrollPosition < bottom;
        });

        if (currentSection) {
            highlightMenuLink(currentSection.id);
        }
    });

    function highlightMenuLink(sectionId) {
        var links = document.querySelectorAll(".layout .navigation .button");
        links.forEach(function (link) {
            link.classList.remove("active");
        });

        var currentLink = document.querySelector(`.layout .navigation .button[id="#${sectionId}"]`);
        if (currentLink) {
            currentLink.classList.add("active");
        }
    }

    window.scrollToSection = function (selector) {
        var element = document.querySelector(selector);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
    };
});