class SayHello{
    private _str : string;

    constructor(str: string){
        this._str = str;
    }

    sayHello() : string {
        return "Hello " + this._str;
    }
}

let hello = new SayHello("BuildSchool");
document.querySelector("body").innerText = hello.sayHello();