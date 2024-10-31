/* const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
*/

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()* 3) + 1;
    if (computerChoice === 1){
        return "rock";
    }
    else if (computerChoice === 2){
        return "paper";
    }
    else {
        return "scissors";
    }
};


let humanChoice = '';

function getHumanChoice(choice) {
    humanChoice = choice;
    console.log(humanChoice)
};



const results = document.querySelector('.results');
const resultText = document.createElement('p');

let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

function playRound(humanChoice, computerChoice){
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

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

results.appendChild(resultText);
resultText.textContent = "your score: " + humanScore;
resultText.textContent = "computer score: " + computerScore;
resultText.textContent = "draws: " + drawScore;
};
