/* const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
*/



const playerResults = document.querySelector('.playerResults');
const computerResults = document.querySelector('.computerResults');
const drawResults = document.querySelector('.drawResults');
const playerResultText = document.createElement('p');
const computerResultText = document.createElement('p');
const drawResultText = document.createElement('p');

let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

function playRound(choice, computerChoice){
    computerChoice = getComputerChoice();
    humanChoice = choice;

    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
    }
    else {
        drawScore++
    }

playerResults.appendChild(playerResultText);
playerResultText.textContent = humanScore;

computerResults.appendChild(computerResultText);
computerResultText.textContent = computerScore;

drawResults.appendChild(drawResultText);
drawResultText.textContent = drawScore;
};
