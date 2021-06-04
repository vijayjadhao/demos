//datatype of variable is union of string, array of numbers or a function
var v1: string | number[] | (() => string);

//v1 is a string variable
v1 = "Vijay";
console.log("value of val " + v1 + " its type is " + typeof (v1));

//v1 is an array
v1 = [10, 20, 30];
console.log("value of val " + v1 + " its type is " + typeof (v1));

//v1 is a function returning string
v1 = () => "Hello";
//calling a function
console.log("value of val " + v1() + " its type is " + typeof (v1));

