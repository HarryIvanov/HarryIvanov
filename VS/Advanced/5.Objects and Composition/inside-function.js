function sayHi() {
    console.log(`${this.name} says Hi!`);
}

const person = {
    name: "Harry",
    age: 23,
    sayHi
}
person.sayHi();