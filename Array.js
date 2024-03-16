// function Test(name) {
//   this.name = name;
// }

// Test.prototype.greet = function (address) {
//   return (this.address = address);
// };

// let value = new Test("he");
// console.log(value.name);
// console.log(value.address);
// console.log(value.greet("Bangalore"));
// console.log(value.address);

class hello {
  constructor(name) {
    this.name = name;
  }
  greet(address) {
    this.address = address;
  }
}
const helloObj = new hello("Raj");

console.log(helloObj.name);
console.log("helloObj.address", helloObj.address);
helloObj.greet("Bengaluru");
console.log("helloObj.address", helloObj.address);
