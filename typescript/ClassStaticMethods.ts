class Person {
    firstname: string;
    static address: string = "Pune";

    sayHello(): void {
        console.log("Hello Friends");
    }

    static staticSayHello(): void {
        console.log("static Hello Friends");
    }

    static staticDisplay(): void {
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
        // sayHello(); //Compile error, can not access any members of class directly.
        // Person.sayHello(); //Compile error, can not access any members of class directly.
    }
}

//calling static method can only be invoked on classname only.
//Calling it on object is compile time error
Person.staticDisplay();