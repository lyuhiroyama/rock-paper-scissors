const options = ["rock", "paper", "scissor"];
let scorePlayer = 0;
let scoreComputer = 0;

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return "Tie";
    } else if(
        (playerSelection == "rock" && computerSelection == "scissor") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection  == "scissor" && computerSelection == "paper")
    ) {
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {

    const result = checkWinner(playerSelection, computerSelection);

    document.querySelector("#player-choice").textContent = `Player choice: ${playerSelection}`;
    document.querySelector("#computer-choice").textContent = `Computer choice: ${computerSelection}`;

    if (result == "Tie") {
        return "It's a Tie"
    } 
    else if (result == "Player") {
        scorePlayer++;
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        scoreComputer++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }

}


function disableButtons() {
    document.querySelectorAll("button").forEach(button => {
        button.disabled = true;
    })
}

function updateScores() {

    if (scorePlayer != 5 && scoreComputer != 5) {
        document.querySelector("#player-score").textContent = `Player Score: ${scorePlayer}`;
        document.querySelector("#computer-score").textContent = `Computer Score: ${scoreComputer}`;
    } else if (scorePlayer == 5) {
        document.querySelector("#player-score").textContent = `Player Score: ${scorePlayer}`;
        document.querySelector("#game-results").textContent = "You win 5 games!";
        disableButtons();
    } else if (scoreComputer == 5) {
        document.querySelector("#computer-score").textContent = `Computer Score: ${scoreComputer}`;
        document.querySelector("#game-results").textContent = "You lost 5 games!";
        disableButtons();
    }
}

updateScores()

document.querySelector("#rock").addEventListener("click", () => {
    document.querySelector("#round-results").textContent = playRound("rock", getComputerChoice());
    updateScores()
});


document.querySelector("#paper").addEventListener("click", () => {
    document.querySelector("#round-results").textContent = playRound("paper", getComputerChoice());
    updateScores()
});

document.querySelector("#scissor").addEventListener("click", () => {
    document.querySelector("#round-results").textContent = playRound("scissor", getComputerChoice());
    updateScores()
});