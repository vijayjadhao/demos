class Person {
    firstName: string;

    constructor() {
        this.firstName = "Default Name";
    }

    display(): void {
        console.log("firstName " + this.firstName);
    }
}

var p1 = new Person();
p1.display();