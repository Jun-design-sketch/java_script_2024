const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
  console.log('Game is starting...');
}

// const person = {name: 'Test'};
// console.log(person.name);

// can store function in object
// const newPerson = {
//   greet: function greet() {
//     console.log('Hello there!');
//   }
// }

// functions are object
console.log(typeof startGame);
console.dir(startGame);

startGameBtn.addEventListener('click', startGame);

// functions could write in right side: stored in the const area
const newTest = function someFunc() {
  console.log('someFunc is running...');
};
// someFunc();
startGameBtn.addEventListener('click', newTest);

