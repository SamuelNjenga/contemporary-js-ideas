// Wrong references of this
// Here 'this' inside the callback function points to the window object, therefore this.name is undefined.

const user_one = {
  name: "George",
  printName: function () {
    console.log(this.name);
  },
  deferPrintName: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 2000);
  },
};

user_one.printName();
user_one.deferPrintName();

const user_two = {
  name: "George",
  printName: function () {
    console.log(this.name);
  },
  deferPrintName: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  },
};

user_two.printName();
user_two.deferPrintName();
