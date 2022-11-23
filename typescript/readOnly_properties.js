var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    Employee.prototype.setValues = function (code, name) {
        //this.empCode = code; //method can not change value of readOnly property
        this.empName = name;
    };
    Employee.prototype.display = function () {
        console.log("empName = " + this.empName);
        console.log("empCode = " + this.empCode);
    };
    return Employee;
}());
var emp = new Employee(10, "John");
//emp.empCode = 20; //Compiler Error, readOnly property can not be changed.
emp.display();
