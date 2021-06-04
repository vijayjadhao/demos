class Test {
    loopFor1(): void {
        var a: number;
        for (a = 1; a <= 5; a++)
            console.log(a);
    }

    loopFor2(): void {
        var a: number = 11;
        for (; a <= 15; a++)
            console.log(a);
    }

    loopFor3(): void {
        var a: number = 21;
        for (; a <= 25;) {
            console.log(a);
            a++;
        }
    }

    loopFor4(): void {
        for (; ;)
            console.log("infinite");
    }
}

var obj = new Test();
obj.demoBreak();
obj.loopFor2();
obj.loopFor3();
obj.loopFor4();
