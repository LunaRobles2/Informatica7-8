let time = 60;

 const alarm = new Audio("alarm.mp3");

function count() {
    time--;
    document.querySelector('h1').innerHTML = time;
    if (time > 0){
    alarm.currentTime = 0;
    alarm.currentTime = 0;
    alarm.play();}}

    else if (time == 0){
    alarm.currentTime = 0;
    alarm.currentTime = 0;
    alarm.play();}}





document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = function(){
    setInterval(count, 1000);
    document.querySelector("button").disabled = true;
    };
});

