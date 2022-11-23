class Person {
    private firstName: string; //instance variable declaration; no use of var k/w

    //setter method; instance method; no use of function k/w
    setName(pname): void {
        this.firstName = pname;
    }

    //getter method; instance method; no use of function k/w
    getName(): string {
        return this.firstName;
    }
}

var p1 = new Person();
p1.setName("Vijay")
console.log("p1's name:" + p1.getName());

var p2 = new Person();
p2.setName("Kanchan")
console.log("p2's name:" + p2.getName());

console.log("p1's name:" + p1.getName());

// console.log("Accessing instance method on classname : " + Person.getName()); //Error