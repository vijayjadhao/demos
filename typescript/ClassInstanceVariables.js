var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var p1 = new Person(); //object created; fields accessed using dot operator
console.log("name - default value:" + p1.name); //default value is undefined
p1.name = "Vijay";
console.log("name:" + p1.name);
var p2 = new Person();
console.log("name - default value:" + p2.name);
p2.name = "Kanchan";
console.log("name:" + p2.name);
console.log("name:" + p1.name);
// console.log("Accessing instance variable on classname : " + Person.name); //compile time error; not accessible on classname
