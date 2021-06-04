interface A {
    [index1: number] : string; //array having index of type number and value is string
    [index2: string] : number; //array having index of type number and value is string
    [index3: boolean] : number; //array having index of type number and value is string
}

var a1: A = ["Vijay", "Ajay", "Jay"];
console.log("a1 =" + a1)
console.log("a1[0] =" + a1[0])
console.log("a1[1] =" + a1[1])
console.log("a1[2] =" + a1[2])

// var a2: A = ["Vijay", "Ajay", "Jay", 100]; //compile time error