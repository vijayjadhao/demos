var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.display = function () {
        console.log("empCode =" + this.empCode);
        console.log("empName =" + this.empName);
    };
    return Employee;
}());
var emp = new Employee();
emp.empCode = "123";
emp.empName = "Swati";
emp.display();
