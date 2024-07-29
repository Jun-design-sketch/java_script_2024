// slice
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults;
testResults.push(333333);
console.log(testResults);
console.log(storedResults);
// arrays are reference value
// each const or var for array store 'pointer' that specific memory location
// testResults = storedResults even delete some or add some


// so
const oneArray = [1, 5.3, 1.5, 10.99, -5, 3, 2];
const twoArray = oneArray.slice();
oneArray.push(333333333);
console.log(oneArray);
console.log(twoArray);

// pick only part
const threeArray = [1, 5.3, 1.5, 10.99, -5, 3, 2];
const threeArrayMk2 = threeArray.slice(0,4); // get index0~3
console.log(threeArray);
console.log(threeArrayMk2);

// concat : copy array and add
// new memory location, new address
const fourthArray = [1, 5.3, 1.5, 10.99, -5, 3, 2, 1];
const fourthArrayMk2 = fourthArray.concat([1]);
fourthArray.push(111111);
console.log(fourthArray, fourthArrayMk2);

// index
console.log(fourthArray.indexOf(10.99));
console.log(fourthArray.indexOf(1)); // first match
console.log(fourthArray.lastIndexOf(1)); // from last
// only primitive value, not reference value( .. object, )
const personData = [{name: 'nemui'}, {name: 'sikasi'}];
console.log(personData.indexOf({name: 'nemui'})); // not hit : -1

// how we could find with object?
const find = personData.find((person, idx, persons) => { // el, idx, array
  return person.name === 'nemui';
});
find.name = 'mounemukunaiyo';
console.log(find); // originam stuff, not copied

const findIndex = personData.findIndex((person, idx, persons) => {
  return person.name === 'mounemukunaiyo';
});
console.log(findIndex);

// includes?
const fifthArray = [1, 5.3, 1.5, 10.99, -5, 3, 2, 1];
console.log(fifthArray.indexOf(10.99) !== -1);
console.log(fifthArray.includes(10.99));