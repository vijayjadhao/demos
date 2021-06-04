var p1; //p1 variable is of type Person so it should define its members
p1 = {
    //property initialization
    fullName: "Vijay Jadhao",
    address: "Pune",
    //method definition
    display: function () {
        console.log("Fullname=" + this.fullName + "    Address=" + this.address);
    }
};
p1.display();
