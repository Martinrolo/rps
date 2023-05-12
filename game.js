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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase()
    if (playerSelection == computerSelection) {
        return "It is a tie!";
    }
    else {
        if (playerSelection === "ROCK") {
            if (computerSelection == "PAPER") {
                return "computer";
            }
            else {
                return "player";
            }
        } else if (playerSelection == "PAPER") {
            if (computerSelection == "SCISSORS") {
                return "computer";
            }
            else {
                return "player";
            }
        } else if (playerSelection == "SCISSORS"){
            if (computerSelection == "ROCK") {
                return "computer";
            }
            else {
                return "player";
            }
        } else {
            return "wtf did you write? Try again."
        }
    }
}

//create game depending on button clicked
const btnRock = document.querySelector('#btn-rock');
const btnPaper = document.querySelector('#btn-paper');
const btnScissors = document.querySelector('#btn-scissors');

//game function with 5 rounds
function game() {
    let playerScore = 0;
    let computerScore = 0

    //create score board
    const scoreDiv = document.createElement('div')
    scoreDiv.classList.add('scores')
    scoreDiv.style.color = 'blue'; 
    scoreDiv.textContent = `Computer ${computerScore} player ${playerScore}`;
    results.appendChild(scoreDiv);

    function updateScore(winner) {
        if (winner === 'player') {
            playerScore++;
          } else if (winner === 'computer') {
            computerScore++;
          }
          scoreDiv.textContent = `Computer ${computerScore} player ${playerScore}`;
          if (playerScore === 5) {
                alert('Player wins!');
          } else if (computerScore === 5) {
                alert('Computer wins!');
          } if (playerScore === 5 || computerScore === 5) {
                playerScore = 0
                computerScore = 0
          }
        }

        btnRock.addEventListener('click', () => {
            updateScore(playRound("rock", getComputerChoice()));
        });
          
        btnPaper.addEventListener('click', () => {
            updateScore(playRound("paper", getComputerChoice()));
        });
          
        btnScissors.addEventListener('click', () => {
            updateScore(playRound("scissors", getComputerChoice()));
        });
        }
  
game()