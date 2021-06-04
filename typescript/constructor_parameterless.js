var Person = /** @class */ (function () {
    function Person() {
        this.firstName = "Default Name";
    }
    Person.prototype.display = function () {
        console.log("firstName " + this.firstName);
    };
    return Person;
}());
var p1 = new Person();
p1.display();
