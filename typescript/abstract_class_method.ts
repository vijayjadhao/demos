abstract class A {  //class must be abstract if it contains abstract method
    abstract hi(): void;  //abstract method

    hello(): void { //concrete method
        console.log("Hello");
    }
}

class AImpl extends A {
    hi(): void {
        console.log("Hi");
    }
}

// var obj_A = new A(); // Compile error, abstract class can not be instantiated
var obj_AImpl = new AImpl();
obj_AImpl.hi();
obj_AImpl.hello();