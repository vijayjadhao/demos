var display = function (msg: string) {
    console.log(msg);
};
display("This is demo of function expression");


var displayArrowNotation = (msg: string) => console.log(msg)
displayArrowNotation("This is demo of function expression with arrow notation/lambda");