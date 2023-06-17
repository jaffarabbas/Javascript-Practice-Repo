const prompt = require('prompt-sync')();

class val {
    u;
    constructor(u) {
        this.u = u;
    }
    get() {
        return this.u;
    }
}

obj = new val(prompt("Enter the value: "));

console.log(obj.get());