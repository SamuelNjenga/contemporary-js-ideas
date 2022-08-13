const people = [
  { firstName: "George", hobby: "Playing football" },
  {
    firstName: "Carol",
    hobby: "Watching Programming VLOGS",
  },
];

console.table(people);
console.table(people, ["firstName"]);
console.table(people, ["hobby"]);
