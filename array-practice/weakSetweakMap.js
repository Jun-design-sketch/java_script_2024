let person = {name: 'Max'};
// only object
const persons = new WeakSet();
persons.add(person);

console.log(persons);