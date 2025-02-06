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

function getHumanChoice() {
    let validChoice = 0;
    let humanChoice = prompt('It\'s time for Rock, Paper or Scissors!\nPlease write "rock", "paper" or "scissors" in the prompt below.')
    console.log(humanChoice)
    humanChoice = humanChoice.toLowerCase()
    console.log(humanChoice)
    while (validChoice == 0) {
        if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
            validChoice++;
        } else {
            humanChoice = prompt('You wrote and invalid choice.\nPlease write "rock", "paper" or "scissors" in the prompt below.')
        }
    }
    return humanChoice    
}

function playRound(humanChoice, computerChoice) {

}
function gameRockPaperScissors() {
    console.log("It's time for Rock, Paper or Scissors!")
    console.log("Computer is making it's choice!")
    console.log("Computer picked " + getComputerChoice() + "!")
    console.log("Now it's time for you to make your choice!")
    console.log("User picked " + getHumanChoice() + "!")
}


let humanScore = 0
let computerScore = 0
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection);
gameRockPaperScissors()