function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    console.log("Computer is making it's choice!")
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
    console.log("Now it's time for you to make your choice!")
    let humanChoice = prompt('It\'s time for Rock, Paper or Scissors!\nPlease write "rock", "paper" or "scissors" in the prompt below.')
    humanChoice = humanChoice.toLowerCase()
    while (validChoice == 0) {
        if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
            validChoice = 1;
        } else {
            humanChoice = prompt('Invalid selection.\nPlease write "rock", "paper" or "scissors" in the prompt below.')
        }
    }
    return humanChoice    
}

function playRound(humanChoice, computerChoice) {
    console.log("Computer picked " + computerChoice + "!")
    console.log("User picked " + humanChoice + "!")
    if (humanChoice == computerChoice) {
        console.log(`It's a draw! Both players selected ${humanChoice}!`)
        return 0;
    } else {
        switch (humanChoice) {
            case "rock":
                if (computerChoice == "scissors") {
                    console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
                    return 1;
                } else if (computerChoice == "paper") {
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
                    return 2;
                }
                break;
            case "paper":
                if (computerChoice == "rock") {
                    console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
                    return 1;
                } else if (computerChoice == "scissors") {
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
                    return 2;
                }
                break;
            case "scissors":
                if (computerChoice == "paper") {
                    console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
                    return 1;
                } else if (computerChoice == "rock") {
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}!`)
                    return 2;
                }
                break;
        }
    }
}
function playGame(n) {
    let humanScore = 0
    let computerScore = 0
    // const computerSelection = getComputerChoice();
    // const humanSelection = getHumanChoice();
    for (let i = 0; i < n; i++) {
        winner = playRound(getHumanChoice(), getComputerChoice());
        if (winner == 1) {
            humanScore++;
        } else if (winner == 2) {
            computerScore++;
        }
    }
    if (humanScore > computerScore) {
        console.log(`Congratulations, you won! The final score of the game is User: ${humanScore} vs. Computer: ${computerScore}.`)
    } else if (computerScore > humanScore) {
        console.log(`Shoot, you lost! Better luck next time. The final score of the game is User: ${humanScore} vs. Computer: ${computerScore}.`)
    } else {
        console.log(`Oh wow, it's a tie! The final score of the game is User: ${humanScore} vs. Computer: ${computerScore}.`)
    }
}


let n = 5
console.log(`It's time for Rock, Paper or Scissors! Let's play ${n} rounds!`)
playGame(n)