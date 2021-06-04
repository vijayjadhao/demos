var global_var = 12;         //global variable

class Numbers {
    class_instance_var = 13;             //class instance variable
    static class_static_var = 10;         //class static variable

    storeNum(): void {
        var local_var = 14;    //local variable
        console.log("Local variable: " + local_var);
    }
}

console.log("Global variable: " + global_var);

//accessed variables using class name
console.log("class_static_var accessed using classname : " + Numbers.class_static_var);
// console.log(Numbers.class_instance_var);  //compile time error
//accessed method using class name
// Numbers.storeNum();    //compile time error

//accessed variables using object
var obj = new Numbers();
console.log("class_instance_var accessed using object :  " + obj.class_instance_var);
// console.log("class_static_var: " + obj.class_static_var);   //compile time error
//accessed method using object
obj.storeNum();