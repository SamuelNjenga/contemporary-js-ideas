// every() -> Returns true if all the elements in the array pass the "test" implemented by the provided function, false otherwise

const peopleList = [
  { name: "John", age: 27 },
  { name: "Samuel", age: 26 },
  { name: "Matt", age: 18 },
  { name: "George", age: 16 },
  { name: "John", age: 70 },
];

const threshold = 20;
const arePeopleAboveThreshold = peopleList.every(function (person) {
  if (person.age > threshold) {
    return true;
  }
  return false;
});
console.log(arePeopleAboveThreshold);

// some() -> Returns true if at least one element in the array pass the "test" implemented by the provided function, false otherwise
const isSomeoneBelowThreshold = peopleList.some(function (person) {
  if (person.age > threshold) {
    return true;
  }
  return false;
});
console.log(isSomeoneBelowThreshold);

// concat() -> It merges two or more arrays/values. It does not change the exixting array, it returns a new one.
const fruits = ["oranges", "banana"];
const vegetables = ["kales", "brocolli"];
const fruitsAndVegetables = fruits.concat(vegetables);
console.log(fruitsAndVegetables);

// findIndex() -> It returns the index of the first element in the array that satisfies the provided testing function.
const mattIndex = peopleList.findIndex(function (person) {
  if (person.name === "Matt") {
    return true;
  }
  return false;
});
console.log(mattIndex);
