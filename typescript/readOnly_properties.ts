class Employee {
    private readonly empCode: number; //initialize readOnly property here or in constructor only
    private empName: string;

    constructor(code: number, name: string) {
        this.empCode = code;
        this.empName = name;
    }

    setValues(code: number, name: string): void {
        //this.empCode = code; //method can not change value of readOnly property
        this.empName = name;
    }

    display(): void {
        console.log("empName = " + this.empName);
        console.log("empCode = " + this.empCode);
    }
}

let emp = new Employee(10, "John");
//emp.empCode = 20; //Compiler Error, readOnly property can not be changed.
emp.display();

