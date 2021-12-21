//Function that figures out what the computer's playing
function computerPlay() {
    let computerSelection = Math.floor(Math.random()*3);

    if (computerSelection === 0) {
        computerSelection =  "rock";
    }
    else if (computerSelection === 1) {
        computerSelection = "paper";
    }
    else {
        computerSelection = "scissors";
    }

    console.log("Computer Selection: " + computerSelection);
    return computerSelection;
}

//Function that figures out what the player is playing.
function playerPlay() {
    let playerSelection = prompt("Rock, Paper or Scissors?", "Rock");
    playerSelection = playerSelection.toLowerCase();

    while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        console.log("Pick a valid selection and make sure there are no spaces!");

        playerSelection = prompt("Rock, Paper or Scissors?", "Rock");
        playerSelection = playerSelection.toLowerCase();
    }

    console.log("Player Final selection: " + playerSelection);
    return playerSelection;
}

//Function that plays one game
function playGame(playerSelection, computerSelection) {
    const tie = "You tied!";
    const computerWin = `The computer wins! ${computerSelection} beats ${playerSelection} `;
    const playerWin = `You win! ${playerSelection} beats ${computerSelection} `;

    //Check for all ties.
    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")) {
        
        return tie;
    }
    //Check for all computer wins
    else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper")) {
        return computerWin;
    }
    //Check for all player wins
    else {
        return playerWin;
    }
}


