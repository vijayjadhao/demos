//default value set for fullName and address.
//if argument is missing, default value is used
//if arguments are set then it overrides the default value
function display(rno, fullName, address) {
    if (fullName === void 0) { fullName = "Vijay"; }
    if (address === void 0) { address = "Pune"; }
    console.log("Roll Number:" + rno + "   Full Name:" + fullName + "   Address:" + address);
}
display(1);
display(2, "Ram");
display(3, "Kanchan", "Mumbai");
