// Since ES6: let/const: block scope
let name = 'Max';
// let name = 'test';

function greet() {
  let age = 30;
  let name = 'Shadowing';
  console.log(name, age);
}

greet();
console.log(name);

// Since ever: var: global/function variable
var something = 'wow';
var something = 'wowwow';
console.log(something);

if(something === 'wowwow'){
  var array = ['el1', 'el2'];
  console.log(array);
}
console.log(array);

// just a block
{
  let zzz = 5;
  console.log(zzz);
}
// console.log(zzz);

// Hoisting: automatically declared whereever function or variable
console.log(userName);
var userName = 'userName'; // initial value undefined

// uncaught Reference error: cannot access 'newUserName' before initialization
// console.log(newUserName);
// let newUserName = 'newUserName';

// without strict mode(ES5~)
var declareTwice = 'first';
var declareTwice = 'twice';
console.log(declareTwice);

noVar = 'noVar';
console.log(noVar);

// with strict mode
"use strict";
noVarAgain = 'noVarAgain';
console.log(noVarAgain);


