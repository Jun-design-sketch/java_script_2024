// add
// tail
const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading');
console.log(hobbies);
// head
const hobbies2 = ['Sports', 'Cooking'];
hobbies2.unshift('Coding'); // everybody go to right one block: slower than push/pop
console.log(hobbies2);
// remove
const hobbies3 = ['Sports', 'Cooking'];
const poppedValue = hobbies3.pop();
console.log(hobbies3);
console.log(poppedValue);
// remove2
const numbers = ['1', '2', '3', '4'];
numbers.shift(); // everybody go to left one block: slower than push/pop
console.log(numbers);
// index
const strings = ['a', 'b', 'c', 'd'];
strings[1] = 'boom!';
console.log(strings);
strings[4] = 'unexisted';
console.log(strings);
// between? 'splice'
const colors = ['red', 'blue', 'green'];
// only for 'real' array
colors.splice(1, 0, 'black', 'white');
console.log(colors);
colors.splice(3, 1);
console.log(colors);
const removedWhat = colors.splice(0);
console.log(colors);
console.log(removedWhat);
// '-'
const weights = ['11', '12', '13', '14'];
weights.splice(-1, 1); // minus = end of array
console.log(weights);