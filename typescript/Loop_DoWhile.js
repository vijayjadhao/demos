var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.loopDoWhile = function () {
        var a = 1;
        do {
            console.log(a);
            a++;
        } while (a <= 5);
    };
    return Test;
}());
var obj = new Test();
obj.loopDoWhile();
