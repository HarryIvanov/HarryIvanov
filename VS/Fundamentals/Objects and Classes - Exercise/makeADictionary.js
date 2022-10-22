function makeADictionary (input) {
    let array = []
    
    
    for (let el of input) {
        let x = JSON.parse(el)
        array.push(x)
    }
    let final =[]
    for (let el of array) {
        let item = {}
        let key = (Object.keys(el)).toString()
        let value = (Object.values(el)).toString()
        item.name = key
        item.definition = value
        for (let i = 0; i < final.length; i++) {
            let x = final[i];
            if (x.name === key) {
                let n = final.indexOf(x)
                final.splice(n,1)
            }
        }
        
        final.push(item)
    }
let sorted = final.sort((a,b) => {
    return a.name.localeCompare(b.name)
})
for (let el of sorted) {
    console.log(`Term: ${el.name} => Definition: ${el.definition}`);
}

   
        

    
}
makeADictionary ([
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Boiler":"NO!"}',
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )