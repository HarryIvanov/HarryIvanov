function solve () {
    let key = 'Pesho'
    let myObj = {
        John: 3,
        Harry: 5,
        [key]: 1, // Можем да го зададем като променлива
    }
    console.log(myObj);
    console.log(myObj[key]); // можем да го достъпим по име на променлива

    let entries = Object.entries(myObj)
    
    let sorted = entries.sort (([keyA, valueA],[keyB, valueB]) => {
       
        return keyA.localeCompare(keyB) // сортиране по keys (азбучен ред). Ако е по value, трябва да е valueA - valueB

    });
console.table(sorted)    


}
solve ()