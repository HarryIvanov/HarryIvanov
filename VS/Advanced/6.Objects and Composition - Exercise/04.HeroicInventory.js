function heroicInventory (array) {
    
    // let final = [];
    // for (const el of array) {
    //     let result = {};
    //     let [name, item, ...params] = el.split(" / ");
    //     result.name = name;
    //     result.level = Number (item);
    //     if ([...params].length > 0) {
    //         result.items = [...params].toString().split(", ")
    //     } else {
    //         result.items = []
    //     }
        
    //     final.push(result)
    // }
    // console.log(JSON.stringify(final));

const result = array.reduce((acc, curr) => {
    const [name, level, item] = curr.split(" / ");
    const hero = {
        name,
        level: Number (level),
        items: item ? item.split(", ") : []
    }
    acc.push(hero);
    return acc;
}, []);

return (JSON.stringify(result));


}
heroicInventory(['Isacc / 25',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)

// Трябва да сложа проверка дали имат параметри