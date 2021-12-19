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

function game() {
    console.log("This is the beginning of a 5 round game against the computer. \n Get ready!");
    let playerScore = 0;
    let computerScore = 0;

    

    for (let i = 0; i < 5; i ++) {

        console.log("Round " + (i + 1) + "!");
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();

        const tie = "You tied!";
        const computerWin = `The computer wins! ${computerSelection} beats ${playerSelection} `;
        const playerWin = `You win! ${playerSelection} beats ${computerSelection} `;

        let result = playGame(playerSelection, computerSelection);

        if (result === computerWin) {
            computerScore += 1;
        }
        else if (result === playerWin) {
            playerScore += 1;
        }

        console.log(result);
        console.log("Current Score: ");
        console.log("Computer: " + computerScore);
        console.log("Player: " + playerScore);
    }

    if (computerScore > playerScore) {
        return "The Computer Won!";
    }
    else if (playerScore > computerScore) {
        return "You won!";
    }
    else return "After 5 rounds, you guys were still tied! Amazing!";
}

console.log(game());