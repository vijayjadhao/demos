var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var SalesEmployee = /** @class */ (function (_super) {
    __extends(SalesEmployee, _super);
    function SalesEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SalesEmployee.prototype.setValues = function (name, code, dept) {
        this.empName = name;
        this.empCode = code;
        this.department = dept;
    };
    SalesEmployee.prototype.display = function () {
        console.log("empName = " + this.empName);
        console.log("empCode = " + this.empCode);
        console.log("department = " + this.department);
    };
    return SalesEmployee;
}(Employee));
var emp = new SalesEmployee();
// emp.empCode; //Compiler Error
emp.setValues("Vijay", 123, "IT");
emp.display();
