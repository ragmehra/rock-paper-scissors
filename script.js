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
    if ((playerSelection === "rock" && computerSelection === "rock") || 
            (playerSelection === "paper" && computerSelection === "paper") || 
            (playerSelection === "scissors" && computerSelection === "scissors")) {
        updateResult(tie, computerSelection, playerSelection);
        //return tie;
    }
    //Check for all computer wins
    else if ((computerSelection === "rock" && playerSelection === "scissors") || 
            (computerSelection === "paper" && playerSelection === "rock") || 
            (computerSelection === "scissors" && playerSelection === "paper")) {
        updateResult(computerWin, computerSelection, playerSelection);
        updateScore("computerWin")
        //return computerWin;
    }
    //Check for all player wins
    else {
        updateResult(playerWin, computerSelection, playerSelection);
        updateScore("playerWin");
        //return playerWin;
    }

    checkForWinner();

}

function updateResult(result, computerSelection, playerSelection) {
    const resultDiv = document.querySelector("#result");
    const computerSelectionDiv = document.querySelector("#computerSelection");
    const playerSelectionDiv = document.querySelector("#playerSelection"); 

    computerSelectionDiv.textContent = "Computer Selection: " + computerSelection;
    playerSelectionDiv.textContent = "Your Selection: " + playerSelection;
    resultDiv.textContent = result;
}

function updateScore(result) {
    const computerScoreDiv = document.querySelector("#computerScore");
    const playerScoreDiv = document.querySelector("#playerScore");
    const roundDiv = document.querySelector("#round");
    let score = retrieveScore();

    if (result === "playerWin") {
        playerScoreDiv.textContent = score[1] + 1;
    }
    else if (result === "computerWin") {
        computerScoreDiv.textContent = score[0] + 1;
    }

}

function retrieveScore() {
    const computerScoreDiv = document.querySelector("#computerScore");
    const playerScoreDiv = document.querySelector("#playerScore");
    let computerScore = Number(computerScoreDiv.textContent);
    let playerScore = Number(playerScoreDiv.textContent);
    let score = [computerScore, playerScore];
    return score;
}

function resetScore() {
    const computerScoreDiv = document.querySelector("#computerScore");
    const playerScoreDiv = document.querySelector("#playerScore");
    computerScoreDiv.textContent = "0";
    playerScoreDiv.textContent = "0";
}

function checkForWinner() {
    const computerScoreDiv = document.querySelector("#computerScore");
    const playerScoreDiv = document.querySelector("#playerScore");

    if (computerScoreDiv.textContent === "5") {
        alert("Computer Wins!");
        resetScore();
    } 
    else if (playerScoreDiv.textContent === "5") {
        alert("You Win!");
        resetScore();
    }



}

function clickPlay(button) {
    button.addEventListener("click", playGame);
}

let buttons = document.querySelectorAll("button");
buttons.forEach(clickPlay);
