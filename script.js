//analog clock 
var analogClockHour = document.querySelector("#analogHour");
var analogClockMinut = document.querySelector("#analogMin");
var analogClockSecond = document.querySelector("#analogSec");


function analogClock() {
    var date = new Date();
    let hour = (date.getHours() * 360 / 12) + (date.getMinutes() * (360 / 60) / 12);
    let min = (date.getMinutes() * 360 / 60) + (date.getMinutes() * (360 / 60) / 60);
    let sec = date.getSeconds() * 360 / 60;
    analogClockHour.style.transform = "rotate(" + hour + "deg)";
    analogClockMinut.style.transform = "rotate(" + min + "deg)";
    analogClockSecond.style.transform = "rotate(" + sec + "deg)";
    setTimeout(analogClock,1000)
}

analogClock();

function digitalClock() {
    var currentDate = new Date();

    if (currentDate.getHours() < 10) {
        document.getElementById('hours').innerHTML = "0" + currentDate.getHours()
    } else {
        document.getElementById('hours').innerHTML = currentDate.getHours()
    }
    if (currentDate.getMinutes() < 10) {
        document.getElementById('minutes').innerHTML = "0" + currentDate.getMinutes()
    } else {
        document.getElementById('minutes').innerHTML = currentDate.getMinutes()
    }
    if (currentDate.getSeconds() < 10) {
        document.getElementById('second').innerHTML = "0" + currentDate.getSeconds();
    } else {
        document.getElementById('second').innerHTML = currentDate.getSeconds();
    }


    setTimeout(digitalClock, 1000);
}

digitalClock();