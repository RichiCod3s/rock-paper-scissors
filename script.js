const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){

    let choice = Math.floor(Math.random() * 3) +1;
    if(choice ===1){
        return rock;
    }else if(choice ==2){
        return paper;
    }else{
        return scissors;
    }
}

//let computerChoice = getComputerChoice();
//console.log(computerChoice); // Outputs "Rock", "Paper", or "Scissors"


function getHumanChoice(){
    let choice = prompt("You feeling lucky? Rock, Paper or Scissors?");
    choice = choice.toLowerCase();
    return choice;
}

//let humanChoice = getHumanChoice();
//console.log(humanChoice);



function playRound(humanChoice, computerChoice){

    //Human loses logic
    if(humanChoice === "rock" && computerChoice === paper){
        console.log("You lose!, Paper beats Rock");
        computerScore++;
    }

    if(humanChoice === "paper" && computerChoice === scissors){
        console.log("You lose!, Scissors beats Paper");
        computerScore++;
    }

    if(humanChoice === "scissors" && computerChoice === rock){
        console.log("You lose!, Rock beats Scissors");
        computerScore++;
    }

    // human wins logic
    if(humanChoice === "rock" && computerChoice === scissors){
        console.log("You win!, Rock beats Scissors");
        humanScore++;
    }

    if(humanChoice === "paper" && computerChoice === rock){
        console.log("You win!, Paper beats Rock");
        humanScore++;
    }

    if(humanChoice === "scissors" && computerChoice === paper){
        console.log("You win!, Scissors beats Paper");
        humanScore++;
    }  
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log("Computer picks " + computerSelection);
playRound(humanSelection, computerSelection);