var SayHello = (function () {
    function SayHello(str) {
        this._str = str;
    }
    SayHello.prototype.sayHello = function () {
        return "Hello " + this._str;
    };
    return SayHello;
}());
var hello = new SayHello("BuildSchool");
document.querySelector("body").innerText = hello.sayHello();
//# sourceMappingURL=hello.js.map