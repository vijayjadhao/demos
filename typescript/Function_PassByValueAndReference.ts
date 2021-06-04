//pass by value
function pass_by_value_test(n1: number, s1: string, b1:boolean) {
    n1++;
    s1 = s1 + " appended";
    b1 = true;
}

var no: number = 123;
var str: string = "this is a string";
var bool: boolean = false;
console.log("Before no :" + no);
console.log("Before str :" + str);
console.log("Before bool :" + bool);
pass_by_value_test(no, str, bool);
console.log("After no :" + no);
console.log("After str :" + str);
console.log("After bool :" + bool);


//pass by reference
function pass_by_reference_test(obj) {
    obj.no++;
    obj.str = obj.str + " appended";
    obj.bool = true;
}

var obj = {no: 123, str: "this is a string", bool: false};
console.log("Before obj.no :" + obj.no);
console.log("Before obj.str :" + obj.str);
console.log("Before obj.bool :" + obj.bool);
pass_by_reference_test(obj);
console.log("After obj.no :" + obj.no);
console.log("After obj.str :" + obj.str);
console.log("After obj.bool :" + obj.bool);