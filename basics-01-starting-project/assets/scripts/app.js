// variables
// data container that can change value
let userName = 'Max';
userName = 'Manu';
// constants
// must not change(~java final~)
const totalUsers = 15;

// uninitialized
let test;

let currentResult = 0;
currentResult = currentResult + 10;
let calculationDescription = '(' + currentResult + ')';
outputResult(currentResult, calculationDescription);

let test2 = "'test'";
// template literal
let test3 = `${currentResult} + test`;
// there is \n
let test4 = `1
  2
    3
      4
        5`;
// there is not \n
let test5 = '1' +
            '2';
// simple \n, escape \
let test6 = '1 \n 2 \' \\';
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
console.log(test6);

function add(num1, num2){
  return num1+num2;
}