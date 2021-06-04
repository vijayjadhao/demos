interface IEmployee {
    empCode: number;
    empName: string;
    empDept?: string;  //optional property using ?
}

let empObj1: IEmployee = {
    empCode: 1,
    empName: "Steve"
}
console.log(empObj1);

let empObj2: IEmployee = {
    empCode: 1,
    empName: "Bill",
    empDept: "IT"
}
console.log(empObj2);