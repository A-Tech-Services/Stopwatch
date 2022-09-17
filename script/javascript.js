


const timeDisplay = document.querySelector(".timerdisplay");
const pauseBtn = document.querySelector("#pausebutton");
const startBtn = document.querySelector("#startbutton");
const resetBtn = document.querySelector("#resetbutton");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let timeStop = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

// Time update function
function updateTime(){
    elapsedTime = Date.now() - startTime;

    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

    // This function to add zero to time if it less than two digit
    function pad(unit){
        return ("0" + unit).length > 2 ? unit : "0" + unit;
    }

    secs = pad(secs);
    hrs = pad(hrs);
    mins = pad(mins);

    timeDisplay.textContent = `${hrs} : ${mins} : ${secs}`;
}


// The Stop button
pauseBtn.addEventListener("click", () => {
    if(!timeStop){
        timeStop = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);

    }
});


// The Start button
startBtn.addEventListener("click",() => {
    if(timeStop){
        timeStop = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 75);
    }
}); 

// The Reset Button
resetBtn.addEventListener("click", () => {
    timeStop = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00 : 00 : 00";
});


