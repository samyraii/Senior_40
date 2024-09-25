const count = document.querySelector(".count");
//const done = document.querySelector(".landing .container .text");
const doneTwo = document.querySelector(".landing .container");
//const ertha2 = document.querySelector(".landing .container .textTwo");

let countdowndate = new Date("September 30, 2025 00:00:00").getTime();
let counter = setInterval(()  => {

    let dateNow = new Date().getTime();

    let dateDiff = countdowndate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60 )) / (1000 * 60))
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000)

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
         count.style.display = "none";
        // done.style.display = "none";
         doneTwo.classList.remove("done");
       //  ertha2.style.display = "block";


    }

}, 1000)
