const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const transformedArray = originalArray.map(obj => obj.price);
const sum = transformedArray.reduce((sumVal, curVal) => sumVal + curVal, 0);
// console.log(sum);

const originalArray2 = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const sum2 = originalArray2.reduce((sumVal, curVal) => sumVal + curVal.price, 0);
// console.log(sum2);

const originalArray3 = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const sum3 = originalArray3.map(obj => obj.price).reduce((sumVal, curVal) => sumVal + curVal, 0);
// console.log(sum3);

// string
const data = 'new york;10.99;2000';
const transformedData = data.split(';');
// console.log(transformedData);

// array
const fragments = ['aaaa', 'bbbbb'];
const merged = fragments.join(' ');
// console.log(merged);

const copiedArray = [...fragments];
fragments.push('cccccc');
console.log(fragments, copiedArray);
// Math.min need each int
const numbers = [1,2,3,4,5]
console.log(Math.min(...numbers));

// ... copy only 'object memory address'!
// when I change particular address's information, copied array also changed.
const persons = [{name: 'yamada', age:30}, {name:'mina', age:29}, {name: 'eina', age:28}];
const copiedPersons = [...persons];
// persons[0].age = 31;
// console.log(persons, copiedPersons);

// use map, get element, make new object
const copiedNotChange = persons.map(person => ({
  name: person.name,
  age: person.age
}));
persons[0].age = 31;
console.log(persons, copiedNotChange);