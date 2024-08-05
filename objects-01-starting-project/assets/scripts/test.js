// spread operator for Object
const person = {name: 'TestPerson', hobbies: ['Sports', 'Cooking']};
console.log(person);
const anotherPerson = person;
// person.age = 30;
console.log(anotherPerson);

// keep nested reference value and address
// but top level things are new copied
const brandNewPerson = { ...person };
person.hobbies.push('Coding');
console.log(brandNewPerson);
// make new copied nested stuff
const person2 = {...person, age: 29, hobbies:[...person.hobbies]};
console.log(person2);

// Object.assign()
const people = {name: 'people?'};
const newPeople = Object.assign({}, people);
people.name = 'people!';
console.log(newPeople);

// Object de-structure
