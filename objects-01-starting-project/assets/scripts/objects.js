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