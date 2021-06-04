// Using simple syntax
var arr1; //declaration
console.log("Contents of an empty array :" + arr1);
arr1 = ["A", "B", "C", "D", "E"]; //initialize
console.log("Contents :" + arr1);
var arr2 = ["P", "Q", "R"]; //declaration with initialization
console.log(arr2);
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]);
// Using Array object and specify array size as argument to constructor
var arr3 = new Array(2);
arr3[0] = 10;
arr3[1] = 20;
console.log(arr3);
// Using Array object and specify array size as argument to constructor
var arr4 = new Array(10.1, 20.2, 30.3);
console.log(arr4);
