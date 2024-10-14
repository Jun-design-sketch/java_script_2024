// pure function
function add(num1, num2) {
  return num1 + num2;
}
console.log((add(1,5)));
console.log((add(12,5)));

// impure function
function addRandom(num1) {
  return num1 + Math.random(); // cannot predict exact output (by outside function)
}
console.log(addRandom(1));

let previousResult = 0;
function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum; // sideEffect
  return sum;
}
console.log(addMoreNumbers(1,2));

const hobbies = ['Sports', 'Cooking'];
function printHobbies(h) {
  h.push('NEW HOBBY'); // change array or object
  console.log(h);
}
printHobbies(hobbies);
let multiplier = 1.1;

// factory function : the function provides another function
function calculateTax(amount,tax) {
  return amount * tax;
}
const vatAmount = calculateTax(100, 0.19);
const incomeTax = calculateTax(100, 0.25);
// function inside of function, return function
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }
  return calculateTax;
}
// can declare various function that have other values inside
const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.26);

multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateIncomeTaxAmount(100));

// Closure
// every function of JavaScript is closure
// function is closed from others

console.log('--------');

let userName = 'testUser';
// function has own lexical environment
// and there is nothing, only has outer environment's pointer(===username)
function greetUser() {
  console.log('Hi ' + userName);
}
userName = 'changed';
greetUser();
// lexicalScope
// JavaScriptは関数が宣言された位置を基準とし、変数の有効範囲を決定する
// 関数が呼び出される時でなく、関数がどこで定義されたかを基準とする
// greetUser()は、globalで宣言されたuserNameを参照する
// そして呼び出される時に、globalで宣言されたuserNameの値は変化していたのでchangedが出力される

// で、scopeなんだけど。。
if(Math.random() > 0.5) {
  var x = 1;
  const y = 100;
}else{
  var x = 2;
  const y = 200;
}
console.log(x); // ES5: Javaならこれはできないけれど、JSでvarはglobalだから使えてしまう
console.log(y); // ES6: y is not defined
// だから昔はこうやっていた。。
(function() {
  var age = 30;
  console.log(age);
})()
console.log(age); // age is not defined
// 今はもうconstを使えば良いからいいけど
