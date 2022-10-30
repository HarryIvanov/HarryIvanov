function phoneBook (array) {
    let result = {};

    for (const line of array) {
       let [name, phoneNumber] = line.split(" ")
       result[name] = phoneNumber     
    }
    for (const key in result) {
      console.log(`${key} -> ${result[key]}`);
    }
}
phoneBook (['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)