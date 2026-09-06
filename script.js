let humanChoice = window.prompt("What's your choice?");
let humanScore = 0;
let compScore = 0;


function getComputerChoice(){
    let compChoice = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random() * compChoice.length) + 1

    if(randomChoice === 1){
        return "rock";
    } if(randomChoice === 2){
        return "paper";
    } if(randomChoice === 3){
        return "scissors"
    }
}





function playRound(getComputerChoice, humanChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {  
    if (getComputerChoice === "rock") {
      alert( "It is a tie!!");
    } else if (getComputerChoice === "paper") {
        alert ("The computer wins!");
      } else {
        alert ("You win this game!");
      }
  }
  else if (humanChoice === "paper") {  
    if (getComputerChoice === "paper") {
      alert ("It is a tie!!");
    } else if (getComputerChoice === "rock") {
        alert ("The computer wins!");
      } else {
        alert ("You win this game!");
      }
  } else {
    if (getComputerChoice === "rock") {
      alert ("Computer wins!");
  } else if (getComputerChoice === "paper") {
      alert ("You win!");
  } else {
      alert ("Draw!");
  }
  }

}

playRound(getComputerChoice(), humanChoice);