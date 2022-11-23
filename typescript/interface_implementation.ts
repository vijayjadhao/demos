interface IEmployee {
    empCode: number;
    name: string;
    getSalary: (number) => number;
}

class Employee implements IEmployee {  //using implements keyword
    empCode: number;
    name: string;

    constructor(code: number, name: string) {
        this.empCode = code;
        this.name = name;
    }

    getSalary(empCode: number): number {
        if (empCode == 1)
            return 20000;
        else
            return 10000;
    }
}

let emp = new Employee(1, "Steve");
console.log("Employee having salary " + emp.getSalary(emp.empCode));
