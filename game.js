function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice === 0) {
        return "ROCK";
    } else if (choice === 1) {
        return "PAPER";
    } else if (choice === 2) {
        return "SCISSORS";
    }
}   

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase()
    computerSelection = getComputerChoice()
    if (playerSelection == computerSelection) {
        return "It is a tie!";
    }
    else {
        if (playerSelection == "ROCK") {
            if (computerSelection == "PAPER") {
                computerScore = ++ computerScore;
                return "You lose! Paper beats rock";
            }
            else {
                playerScore = ++ playerScore;
                return "You win! Rock beats scissors";
            }
        } else if (playerSelection == "PAPER") {
            if (computerSelection == "SCISSORS") {
                computerScore = ++ computerScore;
                return "You lose! Scissors beats paper";
            }
            else {
                playerScore = ++ playerScore;
                return "You win! Paper beats rock";
            }
        } else if (playerSelection == "SCISSORS"){
            if (computerSelection == "ROCK") {
                computerScore = ++ computerScore;
                return "You lose! Rock beats scissors";
            }
            else {
                playerScore = ++ playerScore;
                return "You win! Scissors beats paper";
            }
        } else {
            return "wtf did you write? Try again."
        }
    }
}

function game() {
    while (playerScore !== 5) {
        let userInput = prompt("Rock, paper, scissors?")
        console.log(playRound(userInput, getComputerChoice()))
    }
}

game()
console.log("Congrats! You won.")
