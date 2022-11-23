interface IPerson {
    name: string;
    gender: string;
}

interface IAddress {
    address: string;
}

//multiple inheritance of interfaces
interface IEmployee extends IPerson, IAddress {
    empCode: number;
}

let empObj: IEmployee = {
    empCode: 1,
    name: "Bill",
    gender: "Male",
    address: "Pune"
}
console.log(empObj);