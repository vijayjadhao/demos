var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var p1 = new Person(); //object created; fields accessed using dot operator
console.log("name - default value:" + p1.firstName); //default value is undefined
p1.firstName = "Vijay";
console.log("name:" + p1.firstName);
var p2 = new Person();
console.log("name - default value:" + p2.firstName);
p2.firstName = "Kanchan";
console.log("name:" + p2.firstName);
console.log("name:" + p1.firstName);
// console.log("Accessing instance variable on classname : " + Person.name); //Error
