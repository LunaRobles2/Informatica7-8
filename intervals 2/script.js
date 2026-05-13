let alarm = new Audio("alarm.mp3");

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#m1').onclick = function(){
    let time = 60;
    function count() {

    if (time > 0){
    time--
    let min = Math.floor(time / 60);
    document.querySelector('h1').innerHTML = min + ":" +time;}

    else if (time == 0) {
    alarm.play();
    time--;
}}


    setInterval(count, 1000);
    document.querySelector("#m1").disabled = true;
    };
});



document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#m5').onclick = function(){
    let time = 300;
    function count() {

    if (time > 0){
    time--;
    let min = Math.floor(time / 60);
    let sec = time % 60;
    if (sec > 9) {
        document.querySelector('h1').innerHTML = min + ":" +sec;
    } else {
        document.querySelector('h1').innerHTML = min + ":0" +sec;
    }


    }

    else if (time == 0) {
    alarm.play();
    time--;
}}


    setInterval(count, 1000);
    document.querySelector("#m5").disabled = true;
    };
});



document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#m10').onclick = function(){
    let time = 600;
    function count() {

    if (time > 0){
    time--;
    let min = Math.floor(time / 60);
    let sec = time % 60;
    if (sec > 9) {
        document.querySelector('h1').innerHTML = min + ":" +sec;
    } else {
        document.querySelector('h1').innerHTML = min + ":0" +sec;
    }


    }

    else if (time == 0) {
    alarm.play();
    time--;
}}


    setInterval(count, 1000);
    document.querySelector("#m10").disabled = true;
    };
});
