// property = object's variable
// method = object's function

// what is value?
// Primitive Values && Reference Values(=Objects)
// Primitive Values : Numbers, Strings, Booleans, null, undefined, Symbol
// Reference value : {...}, Arrays, DOM Nodes, ....

// Reference Values = Object but,
// the root is primitive values
const complexPerson = {
  name: 'Max', // string
  hobbies: ['Sports', 'Cooking'], // array -> 2 strings
  address: {
    street: 'Some Street 5',
    stateId: 5,
    country: 'Germany',
    phone: {
      number: 12-345-6789, // numbers
      isMobile: true // boolean
    }
  },
};

// {...} object literal
const person = {
  name: 'Max',
  age: 30,
  hobbies: ['cooking', 'sleep'],
  greet: function() {
    console.log('Hi');
  }
};
// call undefined property = avaiable
console.log(person.isAdmin);
// add property
person.isAdmin = true;
// delete property
// person.age = undefined;
delete person.age;
// call property
person.greet();
console.log(person);

const person2 = {
  'first name': 'test',
  age: 31,
  hobbies: ['cooking', 'sleep'],
  greet: function() {
    console.log('Hello');
  },
  1.5: 'hello!'
};

console.log(person2['first name']);
console.log(person2[1.5]);

// when key is numbers: print it out with number's sort
const numbers = {5: 'hi', 1: 'true'};
console.log(numbers);

const keyName = 'first name';
console.log(person2[keyName]);
// not work
console.log(person.keyName);

// what is 'dynamic'
const userChosenKeyName = 'level';

let person3 = {
  'first name': 'Min',
  age: 44,
  hobbies: ['Tests','Programming'],
  [userChosenKeyName]: 'what?',
  greet: function() {
    alert('Hi there!');
  },
  1.5:'hello'
};
console.log(person3[userChosenKeyName]);