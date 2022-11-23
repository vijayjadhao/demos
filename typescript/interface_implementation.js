var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.name = name;
    }
    Employee.prototype.getSalary = function (empCode) {
        if (empCode == 1)
            return 20000;
        else
            return 10000;
    };
    return Employee;
}());
var emp = new Employee(1, "Steve");
console.log("Employee having salary " + emp.getSalary(emp.empCode));
