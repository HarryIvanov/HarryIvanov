function solve () {

class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello () {
        console.log(`${this.name} says "Hello!"`);
    }
}
let myPerson = new Person ("Harry", 30)
console.log(myPerson); 
myPerson.sayHello()

} solve ()