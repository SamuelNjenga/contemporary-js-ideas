// forEach() -> Method that executes a provided function once for each array element.
const groceryList = ["Banana", "Apples", "Melon"];

groceryList.forEach(function (groceryItem) {
  console.log(groceryItem);
});

// map() -> Creates a new array with the results of calling a provided function on every element on the array
const peopleList = [
  { name: "John", age: 27 },
  { name: "Samuel", age: 26 },
  { name: "Matt", age: 18 },
  { name: "George", age: 16 },
  { name: "John", age: 70 },
];

const listOfPeoplesAge = peopleList.map(function (person) {
  return person.age;
});

console.log(listOfPeoplesAge);

// filter() -> Creates a new array with all the elements that pass the "test" of the provided function.
const listOfPeopleOlderThanTwenty = peopleList.filter(function (person) {
  if (person.age > 20) {
    return true;
  }
  return false;
});

console.log(listOfPeopleOlderThanTwenty);

const listOfPeopleOlderThanEighteen = peopleList.filter(
  (person) => person.age > 18
);

console.log(listOfPeopleOlderThanEighteen);

// find() -> Returns the first element in the array that satisfies the provided testing function
const john = peopleList.find(function (person) {
  return person.name === "John";
});

console.log(john);
