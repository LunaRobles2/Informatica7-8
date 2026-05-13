let alarm = new Audio("alarm.mp3");
let time;
document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#m1').onclick = function(){
        time = 60;
        if (time > 0){
        time--;
        document.querySelector('h1').innerHTML = time;}

    else if (time == 0) {
    alarm.play();
    time--;

    setInterval(count, 1000);
    document.querySelector("button").disabled = true;
    };
});


}}


