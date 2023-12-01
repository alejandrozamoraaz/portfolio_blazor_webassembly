document.addEventListener("DOMContentLoaded", function () {
    const highlightMenuLink = (sectionId) => {
        const links = document.querySelectorAll(".layout .navigation-bar .button");
        links.forEach((link) => link.classList.remove("active"));

        const currentLink = document.querySelector(`.layout .navigation-bar .button[id="#${sectionId}"]`);
        if (currentLink) {
            currentLink.classList.add("active");
        }
    };

    const scrollToSection = (section) => {
        const element = document.getElementById(section);

        if (element) {
            const appbar = document.querySelector(".top-bar");

            window.scrollTo({
                top: element.offsetTop - appbar.offsetHeight,
                behavior: 'smooth'
            });
        }
    };

    const highlightVisibleSection = () => {
        const sections = document.querySelectorAll("section");
        const footer = document.querySelector(".footer-bar");
        const footerHeight = footer.offsetHeight;

        const isMobilePortrait = window.innerWidth < 767;
        const navigationBar = document.querySelector(".navigation-bar");
        const bottomNavHeight = isMobilePortrait ? navigationBar.offsetHeight : 0;

        const appbar = document.querySelector(".top-bar");

        const scrollPosition = window.scrollY;

        const lastSection = sections[sections.length - 1];
        const bottomLastSection = lastSection.offsetTop - appbar.offsetHeight - bottomNavHeight - footerHeight;

        if (scrollPosition >= bottomLastSection) {
            highlightMenuLink(lastSection.id);
            return;
        }

        const currentSection = Array.from(sections).find((section) => {
            const top = section.offsetTop - appbar.offsetHeight;
            const bottom = top - bottomNavHeight - footerHeight + section.offsetHeight;

            return scrollPosition >= top && scrollPosition < bottom;
        });

        if (currentSection) {
            highlightMenuLink(currentSection.id);
        }
    };

    window.addEventListener("scroll", highlightVisibleSection);
    window.scrollToSection = scrollToSection;
});
