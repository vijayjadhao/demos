var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.loopWhile = function () {
        var a = 1;
        while (a <= 5) {
            console.log(a);
            a++;
        }
    };
    return Test;
}());
var obj = new Test();
obj.loopWhile();
