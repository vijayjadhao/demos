var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.demoBreak = function () {
        var a;
        for (a = 1; a <= 5; a++) {
            if (a == 3)
                break;
            console.log(a);
        }
    };
    Test.prototype.demoContinue = function () {
        var a;
        for (a = 11; a <= 15; a++) {
            if (a == 13)
                continue;
            console.log(a);
        }
    };
    return Test;
}());
var obj = new Test();
obj.demoBreak();
obj.demoContinue();
