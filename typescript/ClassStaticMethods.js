var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log("Hello Friends");
    };
    Person.staticSayHello = function () {
        console.log("static Hello Friends");
    };
    Person.staticDisplay = function () {
        //calling static members on class
        console.log("address is " + Person.address);
        Person.staticSayHello();
        //calling static members on this
        console.log("address is " + this.address);
        this.staticSayHello();
        //calling nonstatic members from static method requires object
        var localPerson = new Person();
        localPerson.firstname = "Ram";
        console.log("Local person first name is " + localPerson.firstname);
        localPerson.sayHello();
    };
    Person.address = "Pune";
    return Person;
}());
//calling static method can only be invoked on classname only.
//Calling it on object is compile time error
Person.staticDisplay();
