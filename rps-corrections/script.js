function game(userChoice) {
    let random = Math.random();
    let compChoice;

    if (random < 0.33) {compChoice = "Rock";}
    else if (random < 0.66) {compChoice = "Paper";}
    else if (random < 1) {compChoice = "Scissors";}

    let result = document.querySelector ("#result");
    if (userChoice == compChoice) { result.html = "Tie"}
