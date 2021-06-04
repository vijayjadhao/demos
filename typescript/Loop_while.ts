class Test {
    loopWhile(): void {
        var a: number = 1;
        while (a <= 5) {
            console.log(a);
            a++;
        }
    }
}

var obj = new Test();
obj.loopDoWhile();
