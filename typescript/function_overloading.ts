class Person {
    rollno: number; firstName: string;  lastName: string;

    init();
    init(rno: number);
    init(rno: number, fname: string);
    init(rno: number, fname: string, lname: string);
    init(rno?: number, fname?: string, lname?: string): void {
        this.rollno = rno;
        this.firstName = fname;
        this.lastName = lname;
    }
    display(): void {
        console.log("rollno=" + this.rollno + ", firstName=" + this.firstName + ", lastName=" + this.lastName);
    }
}
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