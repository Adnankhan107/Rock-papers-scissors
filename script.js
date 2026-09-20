function getComputerChoice() {
  let random = Math.random();

  if (random <= 0.3333) {
    return "paper";
  } else if (random >= 0.6666) {
    return "rock";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Pick a move: rock, paper, or scissors");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        computerScore++;
        return "You lose! Paper beats Rock";
      } else if (computerChoice === "rock") {
        return "It is a tie!";
      } else {
        humanScore++;
        return "You win! Rock beats Scissors";
      }
    }

    if (humanChoice === "scissors") {
      if (computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats Paper";
      } else if (computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors";
      } else {
        return "It is a tie!";
      }
    }

    if (humanChoice === "paper") {
      if (computerChoice === "paper") {
        return "It is a tie!";
      } else if (computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats Rock";
      } else {
        computerScore++;
        return "You lose! Scissors beats Paper";
      }
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log("You chose: " + humanSelection);
    console.log("Computer chose: " + computerSelection);

    console.log(playRound(humanSelection, computerSelection));

    console.log("Your score = " + humanScore);
    console.log("Computer's score = " + computerScore);
    console.log("--------------------");
  }

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer won the game!");
  } else {
    console.log("The game is a tie!");
  }
}

playGame();