var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.init = function (rno, fname, lname) {
        this.rollno = rno;
        this.firstName = fname;
        this.lastName = lname;
    };
    Person.prototype.display = function () {
        console.log("rollno=" + this.rollno + ", firstName=" + this.firstName + ", lastName=" + this.lastName);
    };
    return Person;
}());
var p1 = new Person();
p1.init();
p1.display();
var p2 = new Person();
p2.init(1);
p2.display();
var p3 = new Person();
p3.init(1, "Vijay");
p3.display();
var p4 = new Person();
p4.init(1, "Vijay", "Jadhao");
p4.display();
