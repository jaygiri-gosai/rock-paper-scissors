# rock-paper-scissors

The Odin's Foundation Course: Project: Rock Paper Scissors

**Psuedocode**

- Create new Git Repo for this project

- Clone the repo to local

- Create a blank html document with the name index.html

- Create a blank javascript file with the name script.js

  - Add console.log('Hello World!') for testing

- Attach external script.js file to the index.html

- Inside the JS file

  - Create two new variables named humanScore and computerScore in the global scope. Initialize those variables with the value of 0.

  - Create a new function named getComputerChoice.

    - Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
    - Declare variable of type string with name “rock” and value as “rock”
    - Declare variable of type string with name “paper” and value as “paper”
    - Declare variable of type string with name “scissor” and value as “scissors”
    - Declare variable of type integer with a name randomVal with initVal as 0;
    - Use Math.random() function to return a value between 1 to 3 and store inside the randomVal value
      Math.floor(Math.random() \* (4 - 1) + 1)
    - Write a switch block
      - Return ‘rock’ variable value if the randomVal value is 1
      - Return ‘paper’ variable value if the randomVal value is 2
      - Return ’scissor’ variable value if the randomVal value is 3

  - Create a new function named getHumanChoice.

    - Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
    - Use prompt to get the value from human
    - lowercase the human value
    - Return the valid value received from human

  - Create a new function named playRound.

    - Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
    - Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
    - Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
    - Write if else statements to compare the human & computer choice to increasement the points and declare a winner
      - If humanchoice === ‘rock’ && computerChoice === ‘scissors’
        - Then humanScore += 1; & console the winner
      - Else if humanChoice === ‘rock’ && computerChoice === ‘paper’
        - Then computerChoice +=1 & console the winner
      - Else if humanChoice === ‘scissors’ && computerChoice === ‘rock’
        - Then computerChoice +=1 & console the winner
      - Else if humanChoice === ‘scissors’ && computerChoice === ‘paper’
        - Then humanScore += 1; & console the winner
      - Else if humanChoice === ‘paper’ && computerChoice === ‘rock’
        - Then humanScore +=1 & console the winner
      - Else if humanChoice === ‘paper’ && computerChoice === ‘scissors’
        - Then computerChoice +=1 & console the winner
      - Else
        - It’s a tie
    - Increment the humanScore or computerScore variable based on the round winner.

    - Create a new function named playGame
      - Play 5 rounds by calling playRound 5 times
      - Keeps track of the scores and declares a winner at the end.
