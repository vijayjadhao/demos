class Test {
    simpleIf(): void {
        var n: number = 90;
        if (n < 100) {
            console.log(n + " < 100");
        }
    }

    ifElse(): void {
        var n: number = 450;
        if (n < 500)   //curly braces optional for one statement
            console.log(n + " < 500");
        else
            console.log(n + " > 500");
    }

    nestedIf(): void {
        var a: number = 90, b: number = 100, c = 150;
        if (a > b) {
            if (a > c)
                console.log(a + " is greatest ");
            else
                console.log(c + " is greatest ");
        } else {
            if (b > c)
                console.log(b + " is greatest ");
            else
                console.log(c + " is greatest ");
        }
    }

    ladderIf(): void {
        var a: number = 90, b: number = 100, c = 150;
        if (a > b && a > c)
            console.log(a + " is greatest ");
        else if (b > c && b > a)
            console.log(b + " is greatest ");
        else
            console.log(c + " is greatest ");
    }
}

var obj = new Test();
obj.simpleIf();
obj.ifElse();
obj.nestedIf();
obj.ladderIf();