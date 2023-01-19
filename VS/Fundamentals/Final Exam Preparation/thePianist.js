function thePianist (input) {
    let rotations = Number (input.shift());
    let result = {}
    for (let i = 0; i < rotations; i++) {
        let readLine = input.shift()
        let [name, composer, key] = readLine.split("|")
        result[name] = {composer, key}
        
    }
    let readLine = input.shift()
    
    while(readLine !== "Stop") {
        let [command, name, token1, token2] = readLine.split("|")
        if (command == "Add") {
            if (result.hasOwnProperty(name)) {
                console.log(`${name} is already in the collection!`);
            } else {
                console.log(`${name} by ${token1} in ${token2} added to the collection!`);
                result[name] = {}
                result[name].composer = token1
                result[name].key = token2
            }
        } else if (command == "Remove") {
            if (result.hasOwnProperty(name)) {
                delete result[name]
                console.log(`Successfully removed ${name}!`);
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        } else if (command == "ChangeKey") {
            if (result.hasOwnProperty(name)) {
                result[name].key = token1;
                console.log(`Changed the key of ${name} to ${token1}!`);
            } else {
                console.log(`Invalid operation! ${name} does not exist in the collection.`);
            }
        }
        readLine = input.shift()
    }
    for (const el in result) {
        console.log(`${el} -> Composer: ${result[el].composer}, Key: ${result[el].key}`);
    }
}
thePianist ([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]
  )