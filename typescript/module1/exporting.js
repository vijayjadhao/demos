"use strict";
exports.__esModule = true;
exports.test1 = exports.student = exports.msg = void 0;
//local scope and exported
exports.msg = "Hello world";
//local scope and exported
var student = /** @class */ (function () {
    function student(name, age) {
        this.age = age;
        this.name = name;
    }
    student.prototype.display = function () {
        console.log("name=" + this.name + ", age=" + this.age);
    };
    return student;
}());
exports.student = student;
//local scope and exported
function test1() {
    console.log("test1");
}
exports.test1 = test1;
//global scope
function test2() {
    console.log("test2");
}
