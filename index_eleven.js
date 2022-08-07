// This is because of hoisting. Declaring a variable with var in your for loop doesn’t limit its scope to just that block of code like it would using let

for (var val = 0; val < 10; val++) {
  console.log(val);
  setTimeout(function () {
    console.log(`The number is ${val}`);
  }, 1000);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(function () {
    console.log(`The number is ${i}`);
  }, 1000);
}
