//this class represent all person from Pune so
//address should be common to all person
class Person {
    name: string; //IV
    static address: string = "Pune"; //CV
}

var p1 = new Person();
p1.name = "Vijay";
console.log(" Name :" + p1.name + " is having address " + Person.address);

// console.log(" Everybody's address is " + p1.address); //compile time error; static variables not accessible on object

Person.address = "Warje, Pune";
console.log(" Everybody's new address is " + Person.address);