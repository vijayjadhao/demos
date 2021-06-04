var t1 = []; //declare a tuple
console.log("Contents of a empty tuple are " + t1);

//initialize a tuple with values of different datatype
t1[0] = 10;       //number
t1[1] = "Vijay";  //string
t1[2] = true;     //boolean
t1[3] = {name: "Viraj", age: 15, address: "Pune"}; //object
t1[4] = null;     //null
t1[5] = undefined;//undefined

console.log("Contents of a tuple are " + t1);
console.log(t1[0] + " is of type " + typeof (t1[0]));
console.log(t1[1] + " is of type " + typeof (t1[1]));
console.log(t1[2] + " is of type " + typeof (t1[2]));
console.log(t1[3] + " is of type " + typeof (t1[3]));
console.log(t1[4] + " is of type " + typeof (t1[4]));
console.log(t1[5] + " is of type " + typeof (t1[5]));