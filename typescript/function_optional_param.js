//To display student details, rollno and fullName are mandatory parameters
//only address is optional
function display(rno, fullName, address) {
    console.log("Roll Number :" + rno);
    console.log("Full Name :" + fullName);
    if (address != undefined) {
        console.log("Address :" + address);
    }
}
display(1, "Vijay");
display(2, "Kanchan", "Pune");
