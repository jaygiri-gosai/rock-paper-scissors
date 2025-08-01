// Add console.log('Hello World!') for testing
// console.log("Hello World!");

// Create two new variables named humanScore and computerScore in the global scope. Initialize those variables with the value of 0.
let humanScore = 0;
let computerScore = 0;

let pscore = document.getElementById("pscore");
pscore.value = humanScore;

let cscore = document.getElementById("cscore");
cscore.value = computerScore;

// Create a new function named getComputerChoice.
function getComputerChoice() {
  //Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.

  // Declare variable of type string with name “rock” and value as “rock”
  const rock = "rock";

  //  Declare variable of type string with name “paper” and value as “paper”
  const paper = "paper";

  // Declare variable of type string with name “scissor” and value as “scissors”
  const scissor = "scissors";

  // Declare variable of type integer with a name randomVal with initVal as 0;
  let randomVal = 0;

  // Use Math.random() function to return a value between 1 to 3 and store inside the randomVal value
  randomVal = Math.floor(Math.random() * (4 - 1) + 1);

  /* Write a switch block
      - Return ‘rock’ variable value if the randomVal value is 1
      - Return ‘paper’ variable value if the randomVal value is 2
      - Return ’scissor’ variable value if the randomVal value is 3 
  */
  switch (randomVal) {
    case 1:
      return rock;
    case 2:
      return paper;
    case 3:
      return scissor;
  }
}

// Create a new function named getHumanChoice.
function getHumanChoice() {
  // Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
  let choice = "";

  // Use prompt to get the value from human
  while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    // Lowercase the human value
    choice = prompt(
      "Choose any one from 'Rock', 'Paper' or 'scissors'"
    ).toLowerCase();
  }

  // Return the valid value received from human
  return choice;
}

// Create a new function named playRound. Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
function playRound(humanChoice, computerChoice) {
  // Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.

  const resultContainer = document.querySelector("#result");
  resultContainer.innerHTML = "";
  const result = document.createElement("p");
  if (humanScore !== 5 && computerScore !== 5) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore += 1;
      pscore.value = humanScore;
      result.textContent = "You win! Rock beats Scissors";
      console.log("You win! Rock beats Scissors");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore += 1;
      cscore.value = computerScore;
      result.textContent = "You lose! Paper beats Rock";
      console.log("You lose! Paper beats Rock");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore += 1;
      cscore.value = computerScore;
      result.textContent = "You lose! Rock beats Scissors";
      console.log("You lose! Rock beats Scissors");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore += 1;
      pscore.value = humanScore;
      result.textContent = "You lose! Scissors beats Paper";
      console.log("You win! Scissors beats Paper");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore += 1;
      pscore.value = humanScore;
      result.textContent = "You win! Paper beats Rock";
      console.log("You win! Paper beats Rock");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore += 1;
      cscore.value = computerScore;
      result.textContent = "You lose! Scissors beats Paper";
      console.log("You lose! Scissors beats Paper");
    } else {
      result.textContent = "It's a tie!. Try Again";
      console.log("It's a tie!. Try Again");
    }
    resultContainer.appendChild(result);
  }

  if (humanScore === 5 || computerScore === 5) {
    result.innerText = humanScore === 5 ? "You win!" : "Computer win!";
    resultContainer.appendChild(result);
  }
}

// You will write a function named playGame
function playGame() {
  // Play 5 rounds by calling playRound 5 times
  //for (let i = 1; i <= 5; i++) {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();
  playRound(humanChoice, computerChoice);
  //}

  if (humanScore > computerScore) {
    console.log("Human Score:- " + humanScore);
    console.log("Computer Score:- " + computerScore);
    console.log("You win!");
  } else if (humanScore < computerScore) {
    console.log("Human Score:- " + humanScore);
    console.log("Computer Score:- " + computerScore);
    console.log("You lose!");
  } else {
    console.log("Human Score:- " + humanScore);
    console.log("Computer Score:- " + computerScore);
    console.log("It's a tie!");
  }
}
//playGame();

const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", () =>
    playRound(btn.value, getComputerChoice())
  );
});
