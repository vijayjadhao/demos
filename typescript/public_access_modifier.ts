class Employee {
    public empCode: string;  //public
    empName: string;         //No access specifier means its public

    display(): void {
        console.log("empCode =" + this.empCode);
        console.log("empName =" + this.empName);
    }
}

let emp = new Employee();
emp.empCode = "123";
emp.empName = "Swati";
emp.display();