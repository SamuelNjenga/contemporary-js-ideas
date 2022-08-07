// creating new references to objects instead of a new copy
// when you have an object and assign a new variable to that object, you are not assigning a copy of that object, instead you are assigning a new reference to that object
let user = { name: "Samuel Njenga", location: "Nairobi" };
let newUser = user;
user.name = "Ivy Wangui";
console.log(newUser);

let street = { name: "Street A", location: "Nairobi" };
let newStreet = { ...street };
street.name = "Street B";
console.log(newStreet);
