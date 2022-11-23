interface A {
    //array having index of type number and value is string
    //You can use any variable instead of word index
    [index: number]: string;
}

const a1: A = ["Vijay", "Ajay", "Jay"];
console.log("a1 =" + a1)
console.log("a1[0] =" + a1[0])
console.log("a1[1] =" + a1[1])
console.log("a1[2] =" + a1[2])
// var a2: A = ["Vijay", "Ajay", "Jay", 100]; //compile time error because of 100 number value

interface B {
    [index: string]: number;
}

let b1: B;
b1["Ram"] = 10;
b1["Jai"] = 20;
// b1[100] = "Ajay"; //compile error type mismatch
console.log("b1= " + b1);