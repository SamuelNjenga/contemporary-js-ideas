// Closures
const globalFunction = () => {
  let global_variable = "NodeJs"; // ACCESSIBLE TO OTHER FUNCTIONS WITHIN ITS SCOPE
  const mainFunction = () => {
    let main_variable = "ExpressJs";
    return global_variable + " " + main_variable;
  };
  // console.log("Trying to access main_variable", main_variable); -> CANNOT BE ACCESSED BECAUSE OF SCOPE
  return mainFunction();
};

console.log(globalFunction());
