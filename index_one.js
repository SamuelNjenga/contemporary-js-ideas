// Inheritance and the prototype chain in JavaScript
function Animal() {
  this.eatsVeggies = true;
  this.eatsMeat = false;
}

function Herbivore() {}
Herbivore.prototype = new Animal();

function Carnivore() {
  this.eatsMeat = true;
  this.eatsVeggies = false;
}
Carnivore.prototype = new Animal();

let rabbit = new Herbivore();
let bear = new Carnivore();

console.log("DOES A RABBIT EAT MEAT?", rabbit.eatsMeat);
console.log("DOES A RABBIT EAT VEGGIES?", rabbit.eatsVeggies);
console.log("----------------------------------");
console.log("DOES A BEAR EAT MEAT?", bear.eatsMeat);
console.log("DOES A BEAR EAT VEGGIES?", bear.eatsVeggies);
