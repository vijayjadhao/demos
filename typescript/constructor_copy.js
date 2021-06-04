var Person = /** @class */ (function () {
    function Person(p) {
        if (p != undefined)
            this.firstName = p.firstName;
    }
    Person.prototype.display = function () {
        console.log("firstName " + this.firstName);
    };
    return Person;
}());
var p1 = new Person();
p1.firstName = "Vijay";
p1.display();
var p2 = new Person(p1);
p2.display();
