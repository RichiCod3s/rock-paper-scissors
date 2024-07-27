console.log("Hello World!")

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

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

let computerChoice = getComputerChoice();
console.log(computerChoice); // Outputs "Rock", "Paper", or "Scissors"