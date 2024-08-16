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
  this.name = "Max";
  this.greet = function () {
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
  },
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
Candy.prototype.introduce = function () {
  console.log(`jyajya-nn taste: ${this.taste}`);
};
const strawberry = new Candy("Strawberry"); // from constructor function
// the function's prototype(Candy) === strawberry's prototype
strawberry.introduce();

// what is __proto__, prototype
// prototype is attribute that used by function object(constructor function) or class
// define (made by their's) object's attribute and method
// __proto__ is internal attribute, referenced by particular object's prototype
// recommended: Object.getPrototypeOf(), Object.setPrototypeOf()

const course = {
  title: "JavaScript - The Complete Guide",
  rating: 5,
}; // new Object();
// inofficial feature by browser
console.log(course.__proto__);
// official way
console.log(Object.getPrototypeOf(course));

Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course), // spread operator to keep original prototype
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});
course.printRating();

const student = Object.create({
  printProgress: function () {
    console.log(this.progress);
  },
});
student.name = 'ojisan';

Object.defineProperty(student, 'progress', {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: false
});

console.log(student);
console.log(student.progress);