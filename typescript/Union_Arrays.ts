var arr: number[] | string[];

arr = [1, 2, 4];
console.log("**numeric array**")
var i: number;
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr = ["Mumbai", "Pune", "Delhi"]
console.log("**string array**");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}