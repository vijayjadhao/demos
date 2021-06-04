//To display student details, rollno and fullName are mandatory parameters
//only address is optional so parameter name is appended by ? ans it must be trailing parameter.
function display(rno: number, fullName: string, address?: string): void {
    console.log("Roll Number :" + rno);
    console.log("Full Name :" + fullName);
    if (address != undefined) {
        console.log("Address :" + address);
    }
}

display(1, "Vijay");
display(2, "Kanchan", "Pune");

// display(5); //compile error because only one argument is passed