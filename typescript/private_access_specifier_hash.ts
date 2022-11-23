class Employee {
    #empCode: number;
    public empName: string;

    setCode(code: number): void {
        this.#empCode = code;
    }

    display(): void {
        console.log("empCode =" + this.#empCode);
        console.log("empName =" + this.empName);
    }
}

let emp = new Employee();
// emp.empCode = 123; // Compiler Error
emp.setCode(123);
emp.empName = "Swati";
emp.display();