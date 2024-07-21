const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'WIN';
const RESULT_PLAYER_LOSE = 'LOSE';
let gameIsRunning = false;

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! we chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = function() {
  const randomInt = Math.random();
  if(randomInt < 0.33){
    return 'ROCK';
  }else if(randomInt < 0.67){
    return 'PAPER';
  }else{
    return 'SCISSORS';
  }
};

const getWinner = function(cChoice, pChoice) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    cChoice === ROCK && pChoice === PAPER ||
    cChoice === PAPER && pChoice === SCISSORS ||
    cChoice === SCISSORS && pChoice === ROCK
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESULT_PLAYER_LOSE;
  }
}

startGameBtn.addEventListener('click', function() {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
});

// const person = {name: 'Test'};
// console.log(person.name);

// can store function in object
// const newPerson = {
//   greet: function greet() {
//     console.log('Hello there!');
//   }
// }

// function startGame() {
//   console.log('Game is starting...');
// }
// startGameBtn.addEventListener('click', startGame);

// functions are object
// console.log(typeof startGame);
// console.dir(startGame);

// functions could write in right side: stored in the const area
// const newTest = function someFunc() {
//   console.log('someFunc is running...');
// };
// someFunc();
// startGameBtn.addEventListener('click', newTest);

