var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.loopFor1 = function () {
        var a;
        for (a = 1; a <= 5; a++)
            console.log(a);
    };
    Test.prototype.loopFor2 = function () {
        var a = 11;
        for (; a <= 15; a++)
            console.log(a);
    };
    Test.prototype.loopFor3 = function () {
        var a = 21;
        for (; a <= 25;) {
            console.log(a);
            a++;
        }
    };
    Test.prototype.loopFor4 = function () {
        for (;;)
            console.log("infinite");
    };
    return Test;
}());
var obj = new Test();
obj.loopFor1();
obj.loopFor2();
obj.loopFor3();
obj.loopFor4();
