class Person {
    rollno: number;
    firstName: string;
    lastName: string;

    constructor();
    constructor(rno: number);
    constructor(rno: number, fname: string);
    constructor(rno: number, fname: string, lname: string);
    constructor(rno?: number, fname?: string, lname?: string) {
        this.rollno = rno;
        this.firstName = fname;
        this.lastName = lname;
    }
    display(): void {
        console.log("rollno=" + this.rollno + ", firstName=" + this.firstName + ", lastName=" + this.lastName);
    }
}
var p1 = new Person();
p1.display();
var p2 = new Person(1);
p2.display();
var p3 = new Person(1, "Vijay");
p3.display();
var p4 = new Person(1, "Vijay", "Jadhao");
p4.display();