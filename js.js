const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

function getHumanChoice() {
    let humanChoice = "";
    return humanChoice;
};

    
rock.addEventListener('click', function (getHumanChoice) {
    humanChoice = "rock";
    console.log(humanChoice);
    playRound();
});
    
paper.addEventListener('click', () => {
        humanChoice = "paper";
        console.log(humanChoice);
        playRound();
    });
    
scissors.addEventListener('click', () => {
        humanChoice = "scissors";
        console.log(humanChoice);
        playRound();
    });





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



// old code for reference - delete when done
/*
function getHumanChoice () {
    let humanChoice = prompt("Enter one of the following to play the game: Rock, Paper or Scissors");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}
*/
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

