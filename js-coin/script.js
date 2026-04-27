function coin() {
  let random = Math.random();


let text = document.querySelector("h2");

if (random < 0.5){
    text.innerHTML = "Tail";
}

else (random < 0.5){
    text.innerHTML = "Head";
}
}
