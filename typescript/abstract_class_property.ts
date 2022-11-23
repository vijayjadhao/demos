abstract class A {  //class must be abstract if it contains abstract method
    abstract name: string;  //abstract property
    constructor() {
        // this.name = name; //abstract property can not be initialized here
        console.log("in class A constructor");
    }
    hello(): void { //concrete method
        console.log("Hello");
    }
}

class AImpl extends A {    //subclass of A
    name: string;   //re-declaration of abstract property is mandatory
    constructor(name: string) {
        super();  //calling super() is mandatory else compile time error
        this.name = name;
    }
    display(): void {
        console.log("name = " + this.name);
    }
}

// var obj_A = new A(); // Compile error, abstract class can not be instantiated
var obj_AImpl = new AImpl("Vijay");
obj_AImpl.display();
obj_AImpl.hello();