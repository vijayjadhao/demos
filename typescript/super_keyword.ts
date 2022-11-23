class A {
    x: number;
    constructor() {
        console.log("A's constructor");
    }
}

class B extends A {
    y : number;
    constructor() {
        super(); //compile error if missing. Unlike Java, it should not be the first st.
        console.log("B's constructor");
    }
}

var obj = new B();
