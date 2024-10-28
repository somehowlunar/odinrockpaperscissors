function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()* 3) + 1;
    if (computerChoice === 1){
        return "rock";
    }
    else if (computerChoice === 2){
        return "paper";
    }
    else {
        return "scissors"
    }
}


function getHumanChoice () {
    let humanChoice = prompt("Enter one of the following to play the game: Rock, Paper or Scissors");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    if (humanChoice === "rock" && computerChoice === "scissors") {
        alert("You won!");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        alert("Computer Wins");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert("you won!");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        alert("computer wins");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        alert("You win");
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        alert("computer wins");
        computerScore++;
    }
    else {
        alert("thats a draw");
    }

}

function playGame() {
    playRound();
    console.log("Your score " + humanScore);
    console.log("Computer Score " + computerScore);
    playRound();
    console.log("Your score " + humanScore);
    console.log("Computer Score " + computerScore);
    playRound();
    console.log("Your score " + humanScore);
    console.log("Computer Score " + computerScore);
    playRound();
    console.log("Your score " + humanScore);
    console.log("Computer Score " + computerScore);
    playRound();
    console.log("Your score " + humanScore);
    console.log("Computer Score " + computerScore);
    if (humanScore === computerScore) {
        alert("Draw, round summary: " 
            + "computer score " + computerScore + " your score " + humanScore);
    }
    else if (humanScore > computerScore) {
        alert("You win, round summary: " 
            + "computer score " + computerScore + " your score " + humanScore);
    }
    else {
        alert("Computer wins, round summary: " 
            + "computer score  " + computerScore + " your score " + humanScore);
    }

}

playGame()