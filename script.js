let [hr, min, sec, ms] = [0, 0, 0, 0];
let displayTime = document.querySelector("#displayTime");

let timer = null;

function stopwatch() {
    ms++;
    if(ms == 100) {
        sec++;
        ms = 0;
        if(sec == 60) {
            sec = 0;
            min++;
            if(min == 60) {
                min = 0;
                hr++;
            }
        }
    }

    let h = hr < 10 ? "0" + hr : hr;
    let m = min <10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let mi = ms <10 ? "0" + ms : ms;

    displayTime.innerHTML = h + ":" + m + ":" + s + ":" + mi;
}


let play = document.querySelector(".play");
let stop = document.querySelector(".stop");
let reset = document.querySelector(".reset");


play.addEventListener("click", () => {
    watchstart();
});

stop.addEventListener("click", watchstop);

reset.addEventListener("click", watchreset);

function watchstart() {
    if(timer !== null)
    {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 10);
}

function watchstop () {
    clearInterval(timer);
}

function watchreset() {
    clearInterval(timer);
    [hr, min, sec, ms] = [0,0,0,0];
    displayTime.innerHTML ="00:00:00:00";
}