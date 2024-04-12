const options = ["rock", "paper", "scissor"];

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
    if (result == "Tie") {
        return "It's a Tie"
    } 
    else if (result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChocie() {
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper or Scissor");
        if(choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;

    // Comment out playing of 5 rounds:
    //
    // for (let i=0; i<5; i++) {
    //     const playerSelection = getPlayerChocie();
    //     const computerSelection = getComputerChoice();
    //     console.log(playRound(playerSelection, computerSelection));
    //     console.log("------------------------")
    //     if (checkWinner(playerSelection, computerSelection) == "Player") {
    //         scorePlayer++;
    //     } else if(checkWinner(playerSelection, computerSelection) == "Computer") {
    //         scoreComputer++;
    //     }
    // }

  
    const playerSelection = getPlayerChocie();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("------------------------")
    if (checkWinner(playerSelection, computerSelection) == "Player") {
        scorePlayer++;
    } else if(checkWinner(playerSelection, computerSelection) == "Computer") {
        scoreComputer++;
    }



    if (scorePlayer > scoreComputer) {
        console.log(`You: ${scorePlayer}, Computer: ${scoreComputer}`)
        console.log("You win!");
    } else if (scorePlayer < scoreComputer) {
        console.log(`You: ${scorePlayer}, Computer: ${scoreComputer}`)
        console.log("You Lose");
    } else {
        console.log(`You: ${scorePlayer}, Computer: ${scoreComputer}`)
        console.log("We have a Tie");
    }

}

game();

const btnChoice = document.querySelectorAll("button");
btnChoice.forEach("click", () => {
    
})