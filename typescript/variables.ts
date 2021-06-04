var v: string = "var variable";
console.log(v);

{
    let v: string = "let variable";
    console.log(v);
}

const c: string = "const variable";
console.log(c);

var s:string = `This is string s ${c}`;
console.log(s);

//multiple declaration in a statement
var a:number =10, b:string="Sita", d:boolean=false, e=true;
console.log("a :" + a);
console.log("b :" + b);
console.log("d :" + d);
console.log("e :" + e);