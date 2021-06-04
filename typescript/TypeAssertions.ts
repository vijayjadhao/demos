var s1: string = "10";
console.log("type of s1 " + typeof (s1) + " and its value is " + s1);

var n1:number = 50;
console.log("type of n1 " + typeof (n1) + " and its value is " + n1);

n1 = <number><unknown>s1;
console.log("type of n1 " + typeof (n1) + " and its value is " + n1);

