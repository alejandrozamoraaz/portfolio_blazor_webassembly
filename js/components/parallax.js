document.addEventListener("DOMContentLoaded", function () {
    window.initMouseMoveParallax = function () {
        const calcValue = (a, b) => (a / b * 40 - 40 / 2).toFixed(1);

        const handleMouseMove = ({ x, y }) => {
            const card = document.querySelector(".parallax-card");
            const items = document.querySelectorAll(".parallax-item");

            const yValue = calcValue(y, window.innerHeight);
            const xValue = calcValue(x, window.innerWidth);

            card.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;

            [].forEach.call(items, (item) => {
                item.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove, false);
    };
});
