// long time no see foreach
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];
const taxAdjustedPricesTwo = [];

for(const price of prices){
  taxAdjustedPrices.push(price * (1+tax));
}
console.log(taxAdjustedPrices);

// can use index!
prices.forEach((price, idx, prices) => { // shadowing
  const priceObj = {index: idx, taxAdjPrice: price * (1+tax)};
  // taxAdjustedPrices.push(price * (1+tax));
  taxAdjustedPricesTwo.push(priceObj);
});
console.log(taxAdjustedPricesTwo);

console.log('----------');

// map
const threePrices = [10.99, 5.99, 3.99, 6.59];
const threeTax = 0.19;
const taxAdjustedPricesThree =
  threePrices.map((price, idx, threePrices) => { // shadowing
  const priceObj = {index: idx, taxAdjPrice: price * (1+threeTax)};
  return priceObj; // there is return
});
console.log(threePrices);
// keep original array, replace all and make new array
console.log(taxAdjustedPricesThree);

// sort: without arguments, sort as String
const sortedPrices = threePrices.sort((a, b) => {
  if (a > b) {
    return 1;
  }else if(a === b) {
    return 0;
  }else {
    return -1;
  }
});
console.log(sortedPrices);
// reverse
console.log(sortedPrices.reverse());

// filter
const filteredArray = threePrices.filter((price, index, prices) => {
  // filter return true or false
  return price > 6;
});
console.log(filteredArray);

// arrow function
const filteredArray2 = threePrices.filter(p => p > 6);
console.log(filteredArray2);

const fifthPrices = [10.99, 5.99, 3.99, 6.59];

// reduce
const reduceSum = fifthPrices.reduce((prevValue, curValue, curIndex, prices) => {
  return prevValue + curValue;
}, 0); // initial value = 0
console.log(reduceSum);

// const sum = fifthPrices.reduce((prevValue, curValue) => prevValue + curValue, 0);

