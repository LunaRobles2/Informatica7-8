let time = choose;
let alarm = new Audio("alarm.mp3");

if 
choose =


function count() {

    if (time > 0){
    time--;
    document.querySelector('h1').innerHTML = time;}

    else if (time == 0) {
    alarm.play();
    time--;
}}


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = function(){
    setInterval(count, 1000);
    document.querySelector("button").disabled = true;
    };
});
