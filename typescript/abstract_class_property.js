var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    function A() {
        // this.name = name; //abstract property can not be initialized here
        console.log("in class A constructor");
    }
    A.prototype.hello = function () {
        console.log("Hello");
    };
    return A;
}());
var AImpl = /** @class */ (function (_super) {
    __extends(AImpl, _super);
    function AImpl(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    AImpl.prototype.display = function () {
        console.log("name = " + this.name);
    };
    return AImpl;
}(A));
// var obj_A = new A(); // Compile error, abstract class can not be instantiated
var obj_AImpl = new AImpl("Vijay");
obj_AImpl.display();
obj_AImpl.hello();
