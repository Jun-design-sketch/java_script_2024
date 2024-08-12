// class Person {
//   name = "Max";

//   constructor() {
//     this.age = 30;
//   }

//   greet() {
//     console.log(
//       "Hi. I am " + this.name + " and I am " + this.age + " years old"
//     );
//   }
// }

// constructor function
function Person() {
  this.age = 30;
  this.name = 'Max';
  this.greet = function() {
    console.log(
    "Hi. I am " + this.name + " and I am " + this.age + " years old"
    );
  };
}

// const person = Person();
// 'NEW'
const person = new Person();
person.greet();

// Prototype
// All object have prototype
// make object => decide the prototype
// seems like inheritance of class, 'base class'

const p = new Person();
p.greet();
// Person doesn't have toString() but prototype do
console.log(p.toString());
console.log(p.__proto__);

// chain of prototype
// last: global 'Object'

// add something in prototype: fall-back function
Person.prototype = {
  printAge() {
    console.log(this.age);
  }
};
const person3 = new Person();
// exist in definition of object(constructor function)
person3.greet();

console.log(person3.__proto__);
// printAge now exist in __proto__
person3.printAge();


////////

// Object literal
const obj = {}; // obj has prototype that Object.prototype

// constructor function
function Candy(taste) {
  this.taste = taste;
}
Candy.prototype.introduce = function() {
  console.log(`jyajya-nn taste: ${this.taste}`);
}
const strawberry = new Candy('Strawberry'); // from constructor function
// the function's prototype(Candy) === strawberry's prototype
strawberry.introduce();

