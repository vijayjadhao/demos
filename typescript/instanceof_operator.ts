class Greeting {
    greet():void {
        console.log("Hello World!!!")
    }
}

var obj = new Greeting();
obj.greet();
console.log("obj is instance of Greeting : " + (obj instanceof Greeting));

class Test {
    //empty class is allowed
}
console.log("obj is instance of Test : " + (obj instanceof Test));