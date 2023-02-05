function introduce (firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}, my name is ${this.name}`);
}
let person = {
    name: 'Harry'
}
let superHuman = {
    name: "Superman"
}
introduce.call(person, 'Gosho', 'Ivanov');
introduce.apply(person, ["Kiro", "Skalata"]); // - apply работи с масиви.
let newFunc = introduce.bind(superHuman, "Harry", "Ivanov"); // - връща нова функция, която вече не е global и можем да я ползваме
newFunc () // можем да махнем 2та параметъра отгоре ("Harry" , "Ivanov") и да ги вкараме като параметри във функцията. 
//(newFunc ("Harry", "Ivanov"))

//.bind е същата функция като call, но можем да я ползваме по-късно. Call връща печат веднага.
