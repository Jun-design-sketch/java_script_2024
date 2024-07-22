const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'WIN';
const RESULT_PLAYER_LOSE = 'LOSE';
let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, '').toUpperCase();
  if (
    selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS
  ) {
    alert(`Invalid choice! we chose ${DEFAULT_USER_CHOICE} for you!`);
    // return DEFAULT_USER_CHOICE;
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomInt = Math.random();
  if(randomInt < 0.33){
    return 'ROCK';
  }else if(randomInt < 0.67){
    return 'PAPER';
  }else{
    return 'SCISSORS';
  }
};

// const getWinner = function(cChoice, pChoice) {
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  return cChoice === pChoice
  ? RESULT_DRAW
  : cChoice === ROCK && pChoice === PAPER ||
    cChoice === PAPER && pChoice === SCISSORS ||
    cChoice === SCISSORS && pChoice === ROCK
  ? RESULT_PLAYER_WIN
  : RESULT_PLAYER_LOSE;

  // if (cChoice === pChoice) {
  //   return RESULT_DRAW;
  // } else if (
  //   cChoice === ROCK && pChoice === PAPER ||
  //   cChoice === PAPER && pChoice === SCISSORS ||
  //   cChoice === SCISSORS && pChoice === ROCK
  // ) {
  //   return RESULT_PLAYER_WIN;
  // } else {
  //   return RESULT_PLAYER_LOSE;
  // }
}

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you `;
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.';
  } else if (winner === RESULT_PLAYER_WIN) {
    message = message + 'won.';
  } else {
    message = message + 'lost.';
  }
  alert(message);
  gameIsRunning = false;
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

// there is shorter way
const add = (a, b) => a + b;
const add2 = function(a, b) {
  return a + b;
}