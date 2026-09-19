let humanChoice = window.prompt("What's your choice?");
  let humanScore = 0;
  let compScore = 0;


function incrementHumanScore(){
    humanScore++;
    console.log("humanScore:", humanScore);
}

function incrementCompScore(){
    compScore++;
    console.log("compScore:", compScore);
}   




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
        incrementCompScore();
      } else {
        alert ("You win this game!");
        incrementHumanScore();
      }
  }
  else if (humanChoice === "paper") {  
    if (getComputerChoice === "paper") {
      alert ("It is a tie!!");
    } else if (getComputerChoice === "rock") {
        alert ("The computer wins!");
        incrementCompScore();
      } else {
        alert ("You win this game!");
        incrementHumanScore();
      }
  } else {
    if (getComputerChoice === "rock") {
      alert ("Computer wins!");
        incrementCompScore();
  } else if (getComputerChoice === "paper") {
      alert ("You win!");
        incrementHumanScore();
  } else {
      alert ("Draw!");
  }
  }

}


playRound(getComputerChoice(), humanChoice);