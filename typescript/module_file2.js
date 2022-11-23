"use strict";
exports.__esModule = true;
var module_file1_1 = require("./module_file1");
console.log(module_file1_1.greeting); //Prints Hello World!
// @ts-ignore
module_file1_1.greeting = "Hello TypeScript"; // allowed
console.log(module_file1_1.greeting); //Prints Hello TypeScript
