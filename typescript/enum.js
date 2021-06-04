var MyStringEnum;
(function (MyStringEnum) {
    MyStringEnum["ChoiceA"] = "A";
    MyStringEnum["ChoiceB"] = "B";
})(MyStringEnum || (MyStringEnum = {}));
console.log("First choice " + MyStringEnum.ChoiceA);
console.log("Second choice " + MyStringEnum.ChoiceB);
