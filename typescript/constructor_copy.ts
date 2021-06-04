class Person {
    firstName: string;

    constructor(p?: Person) {
        if (p != undefined)
            this.firstName = p.firstName;
    }

    display(): void {
        console.log("firstName " + this.firstName);
    }
}

var p1 = new Person();
p1.firstName = "Vijay";
p1.display();

var p2 = new Person(p1);
p2.display();