// Set : usually stack value?
const ids = new Set(['hi','from','set',2]);

// unique values
ids.add(2);
ids.delete('hi');
console.log(ids.has(2));

// value, value?
for (const entry of ids.entries()) {
  console.log(entry);
}
// set: data structure, use unique values

// Map : key and value
const person1 = {name: 'Max'};
const person2 = {name: 'Manuel'};
// in this case, use object as key : add need info as value
const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);
console.log(personData);
console.log(personData.get(person1));

// DON'T have to do this
const person3 = {id: 'pl'};
const personData3 = {pl: [{info: 'info!'}]};
console.log(personData3[person3.id]);

// set something on map
personData.set(person2, [{date: '2024/08/01'}]);
console.log(personData);

for(const entry of personData.entries()){
  console.log(entry);
}
// becuase entries() return exactly 2 things(case of map; key, value)
for(const [key, value] of personData.entries()){
  console.log(key, value);
}

// only key
for (const key of personData.keys()){
  console.log(key);
}
// only value
for (const value of personData.values()){
  console.log(value);
}

// Maps vs Object
// Map: Can use ANY values (and types) as key.
// better in LARGE case
// better in frequently add or delete
// Object: Only may use strings, numbers or symbols as keys
// better in small/medium case
// easier/quicker to create, not bad performance