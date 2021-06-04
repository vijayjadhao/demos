interface test {
    //datatype of prop is union of string, array of numbers or a function
    prop: string | number[] | (() => string);
}

var v1: test = {
    prop: "Vijay"  //here it is a string
}
console.log("value of prop " + v1.prop + " its type is " + typeof (v1.prop));

var v2: test = {
    prop: [10, 20, 30]  //here it is an array
}
console.log("value of prop " + v2.prop + " its type is " + typeof (v2.prop));

var v3: test = {
    prop: () => "Hello"  //here it is a function
}
console.log("value of prop " + v3.prop + " its type is " + typeof (v3.prop));

