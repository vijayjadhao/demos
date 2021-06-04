//() is mandatory if there are no parameters. {} is optional if it contains one statement
var lambda1 = () => console.log("parameterless lambda");
lambda1();

//() is optional if there is one parameter. {} is optional if it contains one statement
var lambda2 = msg => { console.log(msg); }
lambda2("() is optional for one parameter");

//() is mandatory for moe than one parameter & {} is optional if it contains one statement
var lambda3 = (msg1, msg2) => console.log(msg1 + msg2);
lambda3("multi-args lambda", " demo");





