class Person {
    constructor (name) {
        console.log("exec");
        this.name = name;
    }
}

const Peter = new Person ('Peter')
console.log(Peter);