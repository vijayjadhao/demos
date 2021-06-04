var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.simpleIf = function () {
        var n = 90;
        if (n < 100) {
            console.log(n + " < 100");
        }
    };
    Test.prototype.ifElse = function () {
        var n = 450;
        if (n < 500) //curly braces optional for one statement
            console.log(n + " < 500");
        else
            console.log(n + " > 500");
    };
    Test.prototype.nestedIf = function () {
        var a = 90, b = 100, c = 150;
        if (a > b) {
            if (a > c)
                console.log(a + " is greatest ");
            else
                console.log(c + " is greatest ");
        }
        else {
            if (b > c)
                console.log(b + " is greatest ");
            else
                console.log(c + " is greatest ");
        }
    };
    Test.prototype.ladderIf = function () {
        var a = 90, b = 100, c = 150;
        if (a > b && a > c)
            console.log(a + " is greatest ");
        else if (b > c && b > a)
            console.log(b + " is greatest ");
        else
            console.log(c + " is greatest ");
    };
    return Test;
}());
var obj = new Test();
obj.simpleIf();
obj.ifElse();
obj.nestedIf();
obj.ladderIf();
