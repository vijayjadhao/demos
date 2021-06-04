var t1 = []; //declare a tuple

//initialize
t1[0] = 10;       //number
t1[1] = "Vijay";  //string
t1[2] = true;     //boolean
t1[3] = {name: "Viraj", age: 15, address: "Pune"}; //object
t1[4] = null;     //null
t1[5] = undefined;//undefined

//destructuring tuple
var [a, b, c, d, e, f] = t1;
console.log(a + " is of type " + typeof (a));
console.log(b + " is of type " + typeof (b));
console.log(c + " is of type " + typeof (c));
console.log(d + " is of type " + typeof (d));
console.log(e + " is of type " + typeof (e));
console.log(f + " is of type " + typeof (f));