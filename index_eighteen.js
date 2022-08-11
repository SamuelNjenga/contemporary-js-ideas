// reverse() -> Reverse an array in place, does not create a new copy
const letters = ["a", "b", "c"];
letters.reverse();
console.log(letters);

// includes() -> Determines if an array includes a certain element, returns true if it does, false otherwise

const people = ["John", "Mary", "Catalyna"];

console.log(people.includes("George"));
console.log(people.includes("Mary"));

// pop() -> Removes the last element from an array, and returns that element.
const personRemoved = people.pop();
console.log("Person removed is:", personRemoved);
console.log("People array after a pop operation", people);

// shift() -> Removes the first element of an array and returns that element.
const persons = ["John", "Mary", "Humphrey"];
const personRemovedTwo = persons.shift();
console.log("Person removed is:", personRemovedTwo);
console.log("Remaining persons", persons);

// unshift() -> Adds one or more elements to the beginning of an array, returns the new length of the array.
const peopleListTwo = ["Isaac", "Williams", "Kevin"];
const newLength = peopleListTwo.unshift("Susan", "Joseph");
console.log(
  "The new length is:",
  newLength,
  " and the new list of people is:",
  peopleListTwo
);
