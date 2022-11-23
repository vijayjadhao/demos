var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.setCode = function (code) {
        this.empCode = code;
    };
    Employee.prototype.display = function () {
        console.log("empCode =" + this.empCode);
        console.log("empName =" + this.empName);
    };
    return Employee;
}());
var emp = new Employee();
// emp.empCode = 123; // Compiler Error
emp.setCode(123);
emp.empName = "Swati";
emp.display();
