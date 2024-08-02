let person = {name: 'Max'};
// only object, not numbers or string
const persons = new WeakSet();
persons.add(person);

// make garbage collection process
person = null;
console.log(persons);


let person2 = {name: 'Min'};
const personData = new WeakMap();
personData.set(person2, 'Extra info');
person = null;
console.log(personData);

