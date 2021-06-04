var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.switchcase = function () {
        var month = "jan1";
        switch (month) {
            default:
                console.log("Invalid Month");
            case "nov":
            case "dec":
            case "jan":
            case "feb":
                console.log("Winter");
                break;
            case "mar":
            case "apr":
            case "may":
            case "jun":
                console.log("Summer");
                break;
            case "jul":
            case "aug":
            case "sep":
            case "oct":
                console.log("Rainy");
                break;
        }
    };
    return Test;
}());
var obj = new Test();
obj.switchcase();
