const rock = "rock";
const paper = "paper";
const scissors = "scissors";
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



    //let choice = prompt("You feeling lucky? Rock, Paper or Scissors?");
   let humanChoice ='';

   const buttons = document.querySelectorAll('.rps-button');

   buttons.forEach(button => {
    button.addEventListener('click', () =>{
        humanChoice = button.textContent.toLowerCase();
        playGame();
    })
   })

    
    
    
        





function playRound(humanChoice, computerChoice){

    //Human loses logic
    if(humanChoice === "rock" && computerChoice === paper){
        document.querySelector('.round').textContent = "You lose!, Paper beats Rock";
        console.log("You lose!, Paper beats Rock");
        computerScore++;
    }

    if(humanChoice === "paper" && computerChoice === scissors){
        document.querySelector('.round').textContent = "You lose!, Scissors beats Paper";
        console.log("You lose!, Scissors beats Paper");
        computerScore++;
    }

    if(humanChoice === "scissors" && computerChoice === rock){
        document.querySelector('.round').textContent = "You lose!, Rock beats Scissors";
        console.log("You lose!, Rock beats Scissors");
        computerScore++;
    }

    // human wins logic
    if(humanChoice === "rock" && computerChoice === scissors){
        document.querySelector('.round').textContent = "You win!, Rock beats Scissors";
        console.log("You win!, Rock beats Scissors");
        humanScore++;
    }

    if(humanChoice === "paper" && computerChoice === rock){
        document.querySelector('.round').textContent = "You win!, Paper beats Rock";
        console.log("You win!, Paper beats Rock");
        humanScore++;
    }

    if(humanChoice === "scissors" && computerChoice === paper){
        document.querySelector('.round').textContent = "You win!, Scissors beats Paper";
        console.log("You win!, Scissors beats Paper");
        humanScore++;
    }  

    //draw 
    if(humanChoice === computerChoice){
        document.querySelector('.round').textContent = "It's a draw!";
        console.log("It's a draw!");
    }
}



function playGame(){
        const humanSelection = humanChoice;
        const computerSelection = getComputerChoice();
        document.querySelector('.choice').textContent = "You chose " + humanSelection + 
        " & computer chose " + computerSelection;
        console.log("You picked " + humanSelection);
        console.log("Computer picks " + computerSelection);
        playRound(humanSelection, computerSelection);
        document.querySelector('.score').textContent = "Your score: " + humanScore + " -- Computer's score: " + computerScore;
        console.log("Your score: " + humanScore + " Computer's score: " + computerScore);
      
        if(humanScore == 5) {
            buttons.disabled =true;
            document.querySelector('.score').textContent = "You are the winner!"
        }else if(computerScore == 5){
            buttons.disabled =true;
            document.querySelector('.score').textContent = "You lose, computer is the winner!"
        }
    
}

