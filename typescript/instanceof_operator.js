var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
console.log("obj is instance of Greeting : " + (obj instanceof Greeting));
var Test = /** @class */ (function () {
    function Test() {
    }
    return Test;
}());
console.log("obj is instance of Greeting : " + (obj instanceof Test));
