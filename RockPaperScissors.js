function getUserChoice (userInput) {
   userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Please choose rock, paper or scissors.');
    }
} 
function getComputerChoice () {
    var number = (Math.floor(Math.random() *3 ));
    if (number === 0) {
        return 'rock';
    } else if (number === 1) {
        return 'paper';
    } else if (number === 2) {
        return 'scissors';
    }
} 
function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'You have tied';
    } if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer chose paper, you lose.';
        } else {
            return 'The computer chose scissors, you win!';
        }
    } if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer chose scissors, you lose.';
        } else {
            return 'The computer chose rock, you win!';
        }
    } if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer chose rock, you lose.';
        } else {
            return 'The computer chose paper, you win!';
        }
    } 
}
function playGame(){
    var userChoice = getUserChoice('ROCK');
    var computerChoice = getComputerChoice();
    console.log(userChoice, computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
}
playGame('PAPER');
