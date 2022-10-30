function addressBook (input) {
    let result = {}
    for (const line of input) {
        let [name, address] = line.split(":")
        result[name] = address
    }
   let entries = Object.entries(result)
   
   let sorted = entries.sort(([keyA, valueA],[keyB, valueB]) => {
        return keyA.localeCompare(keyB)
   })
    for (const [name, address] of sorted) {
        console.log(`${name} -> ${address}`);
    }
    }
addressBook (['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)