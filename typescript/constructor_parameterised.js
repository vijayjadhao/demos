var Person = /** @class */ (function () {
    function Person(name) {
        this.firstName = name;
    }
    Person.prototype.display = function () {
        console.log("firstName " + this.firstName);
    };
    return Person;
}());
var p1 = new Person("Vijay");
p1.display();
