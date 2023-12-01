document.addEventListener("DOMContentLoaded", function () {
    window.consoleText = function (words) {
        const colors = ['#9802cd', '#dc9af3'];
        let letterCount = 1;
        let letterOffset = 1;
        let waiting = false;

        const symbol = document.getElementById('console');
        const target = document.getElementById('writing-text');

        target.style.color = colors[0];

        setInterval(function () {
            if (letterCount === 0 && !waiting) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount);
                setTimeout(function () {
                    colors.push(colors.shift());
                    words.push(words.shift());
                    letterOffset = 1;
                    target.style.color = colors[0];
                    letterCount += letterOffset;
                    waiting = false;
                }, 1000);
            } else if (letterCount === words[0].length + 1 && !waiting) {
                waiting = true;
                setTimeout(function () {
                    letterOffset = -1;
                    letterCount += letterOffset;
                    waiting = false;
                }, 1000);
            } else if (!waiting) {
                target.innerHTML = words[0].substring(0, letterCount);
                letterCount += letterOffset;
            }
        }, 120);

        setInterval(function () {
            symbol.style.visibility = (symbol.style.visibility === 'visible') ? 'hidden' : 'visible';
        }, 400);
    };
});
