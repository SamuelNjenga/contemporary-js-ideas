// using loose equality (==)
// unless you need to convert values to a common type first and then checking equality, it is typically better to use strict equality.

// All of these evaluate to 'true'
console.log(false == "0");
console.log(null == undefined);
console.log("" == 0);

// All of these evaluate to 'false' which is probably what you want
console.log(false === "0");
console.log(null === undefined);
console.log("" === 0);
