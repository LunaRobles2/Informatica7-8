function rock() {
  let random = Math.random();
    let text = document.querySelector("h4");
    let result = document.querySelector("h5");
    let you = document.querySelector("h6");
    you.innerHTML = "Your Choice is...Rock";

if (random < 0.57){
    text.innerHTML = "Congratulations, You Won!!!";
    result.innerHTML = "The game choose... scissors✌️";
}
else if (random > 0.80){
    text.innerHTML = "Tie";
    result.innerHTML = "The game choose... rock👊";
}
else {
    text.innerHTML = "Sorry but, You Lost";
    result.innerHTML = "The game choose... paper🤚";
}
}


function paper() {
  let random = Math.random();
    let text = document.querySelector("h4");
    let result = document.querySelector("h5");
    let you = document.querySelector("h6");
    you.innerHTML = "Your Choice is...Paper";

if (random < 0.5){
    text.innerHTML = "Congratulations, You Won!!!";
    result.innerHTML = "The game choose... rock👊";
}
else if (random > 0.80){
    text.innerHTML = "Tie";
    result.innerHTML = "The game choose... paper🤚";
}
else {
    text.innerHTML = "Sorry but, You Lost";
    result.innerHTML = "The game choose... scissors✌️";
}
}


function scissors() {
  let random = Math.random();
    let text = document.querySelector("h4");
    let result = document.querySelector("h5");
    let you = document.querySelector("h6");
    you.innerHTML = "Your Choice is...Scissors";

if (random < 0.30){
    text.innerHTML = "Congratulations, You Won!!!";
    result.innerHTML = "The game choose... paper🤚";
}
else if (random > 0.80){
    text.innerHTML = "Tie";
    result.innerHTML = "The game choose... scissors✌️";
}
else {
    text.innerHTML = "Sorry but, You Lost";
    result.innerHTML = "The game choose... rock👊";
}
}
