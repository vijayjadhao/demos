import {greeting} from "./module_file1"

console.log(greeting); //Prints Hello World!

// @ts-ignore
greeting = "Hello TypeScript"; // allowed
console.log(greeting); //Prints Hello TypeScript