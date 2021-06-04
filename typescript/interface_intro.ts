interface Person {
    //property declaration
    fullName: string,  //using comma as delimiter
    address: string,

    //method declaration
    display();
}

var p1: Person;  //p1 variable is of type Person so it should define its members
p1 = {
    //property initialization
    fullName: "Vijay Jadhao",
    address: "Pune",
    //method definition
    display() {
        console.log("Fullname=" + this.fullName + "    Address=" + this.address);
    }
};
p1.display();