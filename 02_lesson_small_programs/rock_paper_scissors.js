// Given rock, paper, scissors
// User makes a choice
//   Prompt for input
// Computer makes a choice
//   Randomly select an option
// Winner is displayed
// Play another round?

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(playerChoice1, playerChoice2) {
  prompt(`You chose ${playerChoice1}, computer chose ${playerChoice2}`);

  if ((playerChoice1 === 'rock' && playerChoice2 === 'scissors') ||
      (playerChoice1 === 'paper' && playerChoice2 === 'rock') ||
      (playerChoice1 === 'scissors' && playerChoice2 === 'paper')) {
    prompt(`${playerChoice1} wins!`);
  } else if ((playerChoice1 === 'rock' && playerChoice2 === 'paper') ||
            (playerChoice1 === 'paper' && playerChoice2 === 'scissors') ||
            (playerChoice1 === 'scissors' && playerChoice2 === 'rock')) {
    prompt(`${playerChoice2} wins!`);
  } else {
    prompt("It's a tie");
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}