setTimeout(function () {
    console.log("I am an anonymous function invoked after 1000 millisec by setTimesout()");
}, 1000);
(function () {
    console.log("I am a self executing anonymous function");
})();
(function () {
    console.log("I am a self executing anonymous function little diff syntax");
}());
