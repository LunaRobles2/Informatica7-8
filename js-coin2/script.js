
function head() {
  let random = Math.random();
    let text = document.querySelector("h4");

if (random > 0.5){
    text.innerHTML = "Sorry but, You Loose";
}
else {
    text.innerHTML = "Congratulations, You Won!!!";
}
}


function tail() {
  let random = Math.random();
    let text = document.querySelector("h4");

if (random > 0.5){
    text.innerHTML = "Congratulations, You Won!!!";
}
else {
    text.innerHTML = "Sorry but, You Loose";
}
}
