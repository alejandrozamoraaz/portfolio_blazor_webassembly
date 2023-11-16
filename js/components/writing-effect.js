document.addEventListener("DOMContentLoaded", function () {
    window.consoleText = function (words) {
        const colors = ['#9802cd', '#6960fc', '#dc9af3'];
        let letterCount = 1;
        let x = 1;
        let waiting = false;

        const con = document.getElementById('console');
        const target = document.getElementById('writing-text');

        target.style.color = colors[0];

        setInterval(function () {
            if (letterCount === 0 && !waiting) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount);
                setTimeout(function () {
                    colors.push(colors.shift());
                    words.push(words.shift());
                    x = 1;
                    target.style.color = colors[0];
                    letterCount += x;
                    waiting = false;
                }, 1000);
            } else if (letterCount === words[0].length + 1 && !waiting) {
                waiting = true;
                setTimeout(function () {
                    x = -1;
                    letterCount += x;
                    waiting = false;
                }, 1000);
            } else if (!waiting) {
                target.innerHTML = words[0].substring(0, letterCount);
                letterCount += x;
            }
        }, 120);

        setInterval(function () {
            con.style.visibility = (con.style.visibility === 'visible') ? 'hidden' : 'visible';
        }, 400);
    };
});
