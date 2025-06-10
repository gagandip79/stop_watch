let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let display = document.getElementById("display");
let timer = null;
let isPaused = false;

console.log("JavaScript loaded");
console.log("Display element:", display);

function stopWatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.innerText = `${h}:${m}:${s}`;
}

// =========STARTING TIMER ==========
const startButton = document.getElementById("start");
console.log("Start button:", startButton);

startButton.addEventListener("click", () => {
    console.log("Start button clicked");
    if (timer === null) {
        // Only start if timer is not running
        stopWatch(); // Call immediately
        timer = setInterval(stopWatch, 1000);
        isPaused = false;
    }
});

// =================STOP/RESUME FUNCTION===============
const stopButton = document.getElementById("stop");
console.log("Stop button:", stopButton);

stopButton.addEventListener("click", () => {
    console.log("Stop/Resume button clicked");
    if (!isPaused) {
        // Stop the timer
        clearInterval(timer);
        timer = null;
        isPaused = true;
        stopButton.innerHTML = '<i class="ri-play-circle-line"></i>Resume';
    } else {
        // Resume the timer
        stopWatch(); // Call immediately
        timer = setInterval(stopWatch, 1000);
        isPaused = false;
        stopButton.innerHTML = '<i class="ri-stop-circle-line"></i>Stop';
    }
});

// ===========RESET FUNCTION========
const resetButton = document.getElementById("reset");
console.log("Reset button:", resetButton);

resetButton.addEventListener("click", () => {
    console.log("Reset button clicked");
    clearInterval(timer);
    timer = null;
    isPaused = false;
    [hours, minutes, seconds] = [0, 0, 0];
    display.innerText = "00:00:00";
    stopButton.innerHTML = '<i class="ri-stop-circle-line"></i>Stop';
});
