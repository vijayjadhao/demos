//this class represent all person from Pune so
//address should be common to all person
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.address = "Pune";
    return Person;
}());
var p1 = new Person();
p1.firstName = "Vijay";
console.log(" Name :" + p1.firstName + " is having address " + Person.address);
// console.log(" Everybody's address is " + p1.address); //compile time error; static variables not accessible on object
Person.address = "Warje, Pune";
console.log(" Everybody's new address is " + Person.address);
