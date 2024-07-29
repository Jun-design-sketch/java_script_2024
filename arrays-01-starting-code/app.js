// usually
const numbers = [1,2,3];
console.log(numbers);

// (5) empty X 5
const moreNumbers = new Array(5);
console.log(moreNumbers);

const withoutNew = Array(5,2);
console.log(withoutNew);

const yetMoreNumbers = Array.of(1,2);
console.log(yetMoreNumbers);

// iterable, array-like
const moreNumbers2 = Array.from('Hi!');
console.log(moreNumbers2);

const listItems = document.querySelectorAll('li');
// array-like object
console.log(listItems);
const listToArray = Array.from(listItems);
// real array (happy!)
console.log(listToArray);

// array <- could put in <- number, string, object, array
const hobbies= ['Cooking', 'Sports'];
const personalData = [30, 'dddd', {some: []}];
console.log(personalData[1]);
const analyticsData = [[1,1.6],[-5.4,2.1],[33]];
for (const data of analyticsData){
  for(const dataset of data){
    console.log(dataset);
  }
}
