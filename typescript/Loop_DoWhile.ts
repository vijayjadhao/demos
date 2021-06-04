class Test {
    loopDoWhile(): void {
        var a: number = 1;
        do {
            console.log(a);
            a++;
        } while (a <= 5)
    }
}

var obj = new Test();
obj.loopDoWhile();
