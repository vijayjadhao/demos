class Test {
    switchcase(): void {
        var month: string = "jan1";
        switch (month) {
            default:   //can be placed anywhere
                console.log("Invalid Month")
                break;
            case "nov":
            case "dec":
            case "jan" :
            case "feb":
                console.log("Winter");
                break;
            case "mar":
            case "apr":
            case "may" :
            case "jun":
                console.log("Summer");
                break;
            case "jul":
            case "aug":
            case "sep" :
            case "oct":
                console.log("Rainy");
                break;
        }
    }
}

var obj = new Test()
obj.switchcase();