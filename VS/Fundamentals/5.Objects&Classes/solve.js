function solve () {
let myObj = {
    name : "Harry",
    age : 28
}
myObj.town = "Sofia"; // можем добавяме properties динамично
console.log(myObj);
console.log(myObj.name); // можем да достъпваме само името или само годините
console.log((myObj['name'])); // можем и с квадратни скоби, но трябва винаги да е със string
console.log((myObj.name, myObj.age)); // Можем да вземем и 2те със запетайки

console.log(Object.keys(myObj)); // връща keys на object - можем да ги запазваме в променливи и се викат като масив => console.log (myObj[keys[0]])
// let keys = Object.keys(myObj)
console.log(Object.values(myObj)); // връща values на keys
console.log(Object.entries(myObj)); // връща масиви. Всеки масив включва двойна key+value

// myObj.hasOwnProperty("name") = същото като includes, но за обекти.

// delete myOjb.name = трие съответното пропърти




}
solve ()