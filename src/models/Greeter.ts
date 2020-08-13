export class Greeter {
    greeting: string;
    constructor(message: string) {
    this.greeting = message;
    }
    greet(): string {
    return this.greeting;
    }
};