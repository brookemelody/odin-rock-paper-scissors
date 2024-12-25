/**
 * Randomly return one of the following string values "rock", "paper", or "scissors"
 * @returns String value representing the computer's choice
 */
function getComputerChoice()
{
    // Generate a random integer between 0 (inclusive) and 3 (exclusive)
    let randomNumber = Math.floor(Math.random() * 3);
    // Return a choice based on the random integer that was generated
    if (randomNumber == 0) {
        return "rock";
    }
    else if (randomNumber == 1) {
        return "paper";
    }
    else if (randomNumber == 2) {
        return "scissors";
    }
}

/**
 * Takes the user choice and returns it
 * @returns String value representing the player's choice
 */
function getHumanChoice()
{
    let playerChoice = prompt("Choose rock, paper, or scissors:");
    // Validate the user's input (case-insensitive)
    if (playerChoice.toLowerCase() === "rock" || playerChoice.toLowerCase() === "paper" || playerChoice.toLowerCase() === "scissors") {
        return playerChoice.toLowerCase();
    }
    else { // Invalid user input
        return null;
    }
}

/**
 * Global-scope variable to keep track of the human player's score
 */
let humanScore = 0;
/**
 * Global-scope variable to keep track of the computer's score
 */
let computerScore = 0;

/**
 * Plays a single round, increments the round winner's score and logs a winner announcement
 * @param {*} humanChoice the user's choice
 * @param {*} computerChoice the computer's choice
 */
function playRound(humanChoice, computerChoice)
{
    let winner = "";
    if (humanChoice === "rock") {
        switch(computerChoice) {
            case "rock":
                // Tie
                winner = "Tie";
                break;
            case "paper":
                // Computer wins
                winner = "Computer";
                break;
            case "scissors":
                // Player wins
                winner = "Player";
                break;
        }
    }
    else if (humanChoice === "paper") {
        switch(computerChoice) {
            case "rock":
                // Player wins
                winner = "Player";
                break;
            case "paper":
                // Tie
                winner = "Tie";
                break;
            case "scissors":
                // Computer wins
                winner = "Computer";
                break;
        }
    }
    else if (humanChoice === "scissors") {
        switch(computerChoice) {
            case "rock":
                // Computer wins
                winner = "Computer";
                break;
            case "paper":
                // Player wins
                winner = "Player";
                break;
            case "scissors":
                // Tie
                winner = "Tie";
                break;
        }
    }
    else {
        // Invalid input
    }

    // Print a string value representing the round winner to the console
    // and increment the humanScore or computerScore variable based on the round winner
    let message = "";
    if (winner === "Player") {
        // Increment humanScore
        humanScore++;
        message = `You win! ${humanChoice} beats ${computerChoice}`;
    }
    else if (winner === "Computer") {
        // Increment computerScore
        computerScore++;
        message = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    else if (winner === "Tie") {
        message = `Tie! You both chose ${computerChoice}`;
    }
    console.log(message);    
}

/**
 * Plays 5 rounds, keeps track of the scores, and declares a winner at the end
 */
function playGame()
{
    // Loop through 5 rounds of the game
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    // Compare the final humanScore and computerScore to determine the winner of the game
    if (humanScore > computerScore) {
        console.log("Player won the game!");       
    }
    else if (humanScore < computerScore) {
        console.log("Computer won the game!");
    }
    else if (humanScore == computerScore) {
        console.log("Tie!");
    }
    console.log(`Player Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
}


