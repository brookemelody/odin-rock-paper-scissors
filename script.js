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

const playerScoreDiv = document.querySelector("#playerScore");
const computerScoreDiv = document.querySelector("#computerScore");

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
    // Display scores in the UI
    playerScoreDiv.textContent = humanScore;
    computerScoreDiv.textContent = computerScore;
    
    return message;   
}

let result; // String variable that stores the result message
const resultDiv = document.querySelector("#results"); // Target the div in the HTML to display the results

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
    let computerSelection = getComputerChoice(); // This needs to be inside the event listener to randomly generate a new value each round
    result = playRound("rock", computerSelection);
    resultDiv.textContent = result;
    if (humanScore == 5 || computerScore == 5) {
        announceWinner();
    }
})

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    result = playRound("paper", computerSelection);
    resultDiv.textContent = result;
    if (humanScore == 5 || computerScore == 5) {
        announceWinner();
    }
})

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    result = playRound("scissors", computerSelection);
    resultDiv.textContent = result;
    if (humanScore == 5 || computerScore == 5) {
        announceWinner();
    }
})

/**
 * Announce a winner of the game once one player reaches 5 points
 */
function announceWinner()
{
    if (humanScore == 5) {
        resultDiv.textContent = "Player won the game!";
    }
    else if (computerScore == 5) {
        resultDiv.textContent = "Computer won the game!";
    }
}

