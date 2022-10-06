const computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;

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

function playRound(playerSelection, computerSelection){
    console.log(playerSelection, computerSelection)
    if(computerSelection === playerSelection){
        alert("Tie!")
    } else if(computerSelection == "paper" && playerSelection == "rock" || computerSelection == "scissors" && playerSelection == "paper" || computerSelection == "rock" && playerSelection == "scissors") {
        playerScore++
        alert("You win!");

    } else if(computerSelection == "rock" && playerSelection == "paper" || computerSelection == "scissors" && playerSelection == "rock" || computerSelection == "paper" && playerSelection == "scissors"){
        computerScore++
        alert("You lose!");

    } else {
        alert("Enter correct choice!");
    }
}


function game(){
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice:", "Rock, Paper, Scissors").toLowerCase()
        playRound(playerSelection, computerSelection)
        console.log(playerScore, computerScore)

    } if (playerScore > computerScore) {
        alert('You beat the computer!')

    } else if (playerScore < computerScore) {
        alert('You got beat by the computer!')

    } else {
        alert('You tied!')
    }
}

game()