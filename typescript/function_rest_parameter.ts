//3 dots ... before parameter name makes rest parameter and its datatype must be an array.
function addNumbers(...nums: number[]) {
    console.log("No of parameters received:" + nums.length);
    var i;
    var sum: number = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
}

addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);