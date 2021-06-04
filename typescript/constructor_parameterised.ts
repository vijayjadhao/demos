class Person {
    firstName: string;

    constructor(name: string) {
        this.firstName = name;
    }

    display(): void {
        console.log("firstName " + this.firstName);
    }
}

var p1 = new Person("Vijay");
p1.display();