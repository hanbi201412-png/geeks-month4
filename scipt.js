let clicks = 0;
let seconds = 10;
let timerId = null;

let btn = document.getElementById("btn");
let restart = document.getElementById("restart");

btn.onclick = function() {
    clicks++;

    document.getElementById("score").textContent = "score: " + clicks;

    if (timerId === null) {
        timerId = setInterval(function() {
            seconds--;

            document.getElementById("timer").textContent =
                "Осталос: " + seconds + " sec";

            if (seconds === 0) {
                clearInterval(timerId);
                timerId = null;

                btn.disabled = true;
                restart.disabled = false;

                document.getElementById("result").textContent =
                    "Время вышло Твой результат: " + clicks + "click";

               
            }
        }, 1000);
    }
};

restart.onclick = function() {
    clicks = 0;
    seconds = 10;

    document.getElementById("score").textContent = "click: 0";
    document.getElementById("timer").textContent = "Осталос: 10 сек";

    document.getElementById("result").textContent = "";

    btn.disabled = false;
    restart.disabled = true;
};
