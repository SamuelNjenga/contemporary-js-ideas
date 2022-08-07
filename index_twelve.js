// for (var val = 0; val < 10; val++) {
//   console.log(val);
//   setTimeout(function () {
//     console.log(`The number is ${val}`);
//   }, 1000);
// }
// if (val === 10) {
//   console.log("I can still see the value");
// }

let i;
for (i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(function () {
    console.log(`The number is ${i}`);
  }, 1000);
}