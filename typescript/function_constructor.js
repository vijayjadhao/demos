var multiply = new Function("a", "b", "return a * b");
console.log("Multiplication =" + multiply(4, 3));
var add = new Function("a", "b", " {console.log(\"adding numbers\"); return a + b }");
console.log("Addition =" + add(4, 3));
