function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock"
            break;
        case 1:
            return "paper"
            break;
        case 2:
            return "scissors"
            break;
        default:
            console.log("Sorry, but the computer got confused and couldn't choose a valid tool.")
    }
}

function gameRockPaperScissors() {
    console.log("It's time for Rock, Paper or Scissors!")
    console.log("Computer is making it's choice!")
    console.log("Computer picked " + getComputerChoice() + "!")
}

gameRockPaperScissors()