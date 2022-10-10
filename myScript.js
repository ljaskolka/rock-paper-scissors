const computerSelection = getComputerChoice();

const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")

const outcomeDiv = document.querySelector(".outcome")

const playerScoreSpan = document.querySelector(".player-score")
const computerScoreSpan = document.querySelector(".computer-score")

const outcomeSpan = document.querySelector(".outcome")

const pcRock = document.querySelector(".pc-rock")
const pcPaper = document.querySelector(".pc-paper")
const pcScissors = document.querySelector(".pc-scissors")

const plRock = document.querySelector(".rock")
const plPaper = document.querySelector(".paper")
const plScissors = document.querySelector(".scissors")

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
    console.log( playerSelection, computerSelection)
    console.log( playerScore, computerScore)
    plRock.removeAttribute("id", "hov")
    plPaper.removeAttribute("id", "hov")
    plScissors.removeAttribute("id", "hov")
    pcRock.removeAttribute("id", "hov")
    pcPaper.removeAttribute("id", "hov")
    pcScissors.removeAttribute("id", "hov")
    if(computerSelection === playerSelection){
        playerScore++
        computerScore++
    } else if(computerSelection == "paper" && playerSelection == "scissors" || computerSelection == "scissors" && playerSelection == "rock" || computerSelection == "rock" && playerSelection == "paper") {
        playerScore++
        console.log("Player win")
    } else if(computerSelection == "scissors" && playerSelection == "paper" || computerSelection == "rock" && playerSelection == "scissors" || computerSelection == "paper" && playerSelection == "rock"){
        computerScore++
        console.log("Computer Win")
    } else {
        console.log("enter correct choice")
    }
    
};

const checkForWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
    alert("Player won!")
    } else if (computerScore === 5) {
        alert("Computer won!")
    }

}

const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player Score: ${playerScore}`
    computerScoreSpan.innerText = `Computer Score: ${computerScore}`
}

rockButton.addEventListener('click', function(){
    const computerSelection = getComputerChoice()
    const playerSelection = "rock"
    playRound(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkForWinner(playerScore, computerScore);
    plRock.setAttribute("id", "hov")
    if(computerSelection === "rock"){
        pcRock.setAttribute("id", "hov")   
    } else if(computerSelection === "paper"){
        pcPaper.setAttribute("id", "hov")
    } else {
        pcScissors.setAttribute("id", "hov")
    }
});

paperButton.addEventListener('click', function(){
    const computerSelection = getComputerChoice()
    const playerSelection = "paper"
    playRound(playerSelection, computerSelection)
    checkForWinner(playerScore, computerScore)
    plPaper.setAttribute("id", "hov")
    if(computerSelection === "rock"){
        pcRock.setAttribute("id", "hov")   
    } else if(computerSelection === "paper"){
        pcPaper.setAttribute("id", "hov")
    } else {
        pcScissors.setAttribute("id", "hov")
    }
});

scissorsButton.addEventListener('click', function(){
    const computerSelection = getComputerChoice()
    const playerSelection = "scissors"
    playRound(playerSelection, computerSelection)
    checkForWinner(playerScore, computerScore)
    plScissors.setAttribute("id", "hov")
    if(computerSelection === "rock"){
        pcRock.setAttribute("id", "hov")   
    } else if(computerSelection === "paper"){
        pcPaper.setAttribute("id", "hov")
    } else {
        pcScissors.setAttribute("id", "hov")
    }
});


// old version

// function game(){
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt("Enter your choice:", "Rock, Paper, Scissors").toLowerCase()
//         playRound(playerSelection, computerSelection)
//         console.log(playerScore, computerScore)

//     } if (playerScore > computerScore) {
//         alert('You beat the computer!')

//     } else if (playerScore < computerScore) {
//         alert('You got beat by the computer!')

//     } else {
//         alert('You tied!')
//     }
// }

// game()