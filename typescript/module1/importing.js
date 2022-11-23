"use strict";
exports.__esModule = true;
//importing all the exported members of the module exporting.ts and identified using exp.
var exp = require("./exporting");
//accessing exported members using exp
console.log(exp.msg);
exp.test1();
var s1 = new exp.student("Vijay", 10);
s1.display();
