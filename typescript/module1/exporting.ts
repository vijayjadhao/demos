//local scope and exported
export var msg: string = "Hello world";


//local scope and exported
export class student {
    name: string;
    age: number;

    constructor(name, age) {
        this.age = age;
        this.name = name;
    }

    display() {
        console.log("name=" + this.name + ", age=" + this.age);
    }
}

//local scope and exported
export function test1() {
    console.log("test1");
}

//global scope
function test2() {
    console.log("test2");
}