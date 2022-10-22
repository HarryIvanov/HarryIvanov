function inventory (array) {
    
    let persons = []
    for (let i = 0; i < array.length; i++) {
        let [name, level, items] = array[i].split(" / ") 
        let person = {}
        person.name = name;
        person.level = Number (level);
        person.items = items
        persons.push(person)
    }
    
    let final = persons.sort((a,b) =>{
        return a.level - b.level
    })
    for (let el of final) {
        console.log(`Hero: ${el.name}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items}`);
        
    }
}
inventory ([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )