class Employee {
    public empName: string;
    protected empCode: number;
}

class SalesEmployee extends Employee {
    private department: string;

    setValues(name: string, code: number, dept: string): void {
        this.empName = name;
        this.empCode = code;
        this.department = dept;
    }

    display(): void {
        console.log("empName = " + this.empName);
        console.log("empCode = " + this.empCode);
        console.log("department = " + this.department);
    }
}

let emp = new SalesEmployee();
//emp.empCode; //Compiler Error
emp.setValues("Vijay", 123, "IT");
emp.display();