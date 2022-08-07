// undefined is not null
// Don't check that an object exists by comparing the object to null.
const a;
if (a !== null) {
  console.log(a.someProperty);
  /**
   * Uncaught Typerror:
   * Cannot read property 'someProperty' of undefined
   */
}

const myObj;
if (typeof myObj !== "undefined" && myObj !== null) {
  console.log(myObj.someProperty);
}
