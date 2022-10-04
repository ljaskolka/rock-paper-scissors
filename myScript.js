const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;

function getPlayerChoice(){
    return prompt("Enter your choice:");
}

function getComputerChoice(){
    let x = Math.floor(Math.random() * 3);
    if(x === 0) {
        return("rock");
    } else if(x === 1) { 
        return("paper");
    } else {
        return("scissors")
    }
}

console.log(playerSelection);
console.log(computerSelection);

function playGame(playerSelection, computerSelection){
    if(computerSelection === playerSelection){
        alert("Tie!")
    } else if(computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper" || computerSelection == "rock" && playerSelection == "scissors") {
        alert("You win!");

    } else if(computerSelection == "rock" && playerSelection == "paper" || computerSelection == "scissors" && playerSelection == "rock" || computerSelection == "paper" && playerSelection == "scissors"){
        alert("You lose!");

    } else {
        alert("Enter correct choice!");
    }
}




playGame(computerSelection, playerSelection);