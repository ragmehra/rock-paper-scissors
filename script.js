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

//Function that figures out what the player is playing, based on button clicked
function playerPlay(e) {
    let playerSelection; 
    console.log(e);
    if (e.target.id === 'rock'){
        playerSelection = 'rock';
    }
    else if (e.target.id === 'paper') {
        playerSelection = 'paper';
    }
    else if (e.target.id === "scissors") {
        playerSelection = "scissors";
    }
    console.log("Your selection: " + playerSelection);
    return playerSelection;
}


//Function that plays one game
function playGame(e) {

    let playerSelection = playerPlay(e);
    let computerSelection = computerPlay();
    let result;
    const tie = "You tied!";
    const computerWin = `The computer wins! ${computerSelection} beats ${playerSelection} `;
    const playerWin = `You win! ${playerSelection} beats ${computerSelection} `;

    //Check for all ties.
    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")) {
        result = `Player Selection: ${playerSelection} \n Computer Selection: 
            ${computerSelection} \n ${tie}`; 
        updateResult(result);
        return tie;
    }
    //Check for all computer wins
    else if ((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper")) {
        result = `Player Selection: ${playerSelection} \n Computer Selection: 
            ${computerSelection} \n ${computerWin}`; 
        updateResult(result);
        return computerWin;
    }
    //Check for all player wins
    else {
        result = `Player Selection: ${playerSelection} \n Computer Selection: 
            ${computerSelection} \n ${playerWin}`; 
        updateResult(result);
        return playerWin;
    }
}

function updateResult(text) {
    let result = document.querySelector("#result");

    result.textContent = "";
    result.textContent = text;
}

function clickPlay(button) {
    button.addEventListener("click", playGame);
}

let buttons = document.querySelectorAll("button");
buttons.forEach(clickPlay);
