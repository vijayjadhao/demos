class Test {
    demoBreak(): void {
        var a: number;
        for (a = 1; a <= 5; a++) {
            if (a == 3) break;
            console.log(a);
        }
    }

    demoContinue(): void {
        var a: number;
        for (a = 11; a <= 15; a++) {
            if (a == 13) continue;
            console.log(a);
        }
    }
}

var obj = new Test();
obj.demoBreak();
obj.demoContinue();
