class Greeter{
    greeting:string;
    constructor(mesage:string){
        this.greeting = mesage;
    }
    greet():string{
        return this.greeting;
    }
}
let greeter = new Greeter("Hello, world!");
console.log(greeter.greet());