let alarm = new Audio("alarm.mp3");

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#m1').onclick = function(){
    let time = 61;
    function count() {

    if (time > 0){
    time--;
    document.querySelector('h1').innerHTML = time;}

    else if (time == 0) {
    alarm.play();
    time--;
}}


    setInterval(count, 1000);
    document.querySelector("button").disabled = true;
    };
});



document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#m5').onclick = function(){
    let time = 301;
    function count() {

    if (time > 0){
    time--;
    document.querySelector('h1').innerHTML = time;}

    else if (time == 0) {
    alarm.play();
    time--;
}}


    setInterval(count, 1000);
    document.querySelector("button").disabled = true;
    };
});



document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#m10').onclick = function(){
    let time = 601;
    function count() {

    if (time > 0){
    time--;
    document.querySelector('h1').innerHTML = time;}

    else if (time == 0) {
    alarm.play();
    time--;
}}


    setInterval(count, 1000);
    document.querySelector("button").disabled = true;
    };
});
