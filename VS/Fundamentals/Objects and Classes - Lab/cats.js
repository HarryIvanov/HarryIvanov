function cats (array) {
  let cats = [];

  class Cat {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    Meow () {
        console.log(`${this.name}, age ${this.age} says Meow`);
  }
}
for (let i = 0; i < array.length; i++) {
    let catData = array[i].split(" ");
    let catName, catAge;
    [catName, catAge] = [catData[0], catData[1]];
    let newCat = new Cat (catName, catAge)
    cats.push(newCat)
}      
    for (let cc of cats) {
        cc.Meow()
    }    

}
cats (['Mellow 2', 'Tom 5'])
cats (['Candy 1', 'Poppy 3', 'Nyx 2'])