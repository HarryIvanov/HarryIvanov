function thePianist (input) {
    let rotations = Number (input.shift());
    let pieces = {};

    for(let i = 0; i < rotations; i++) {
        let [piece, composer, key] = input.shift().split("|");
        pieces[piece] = {composer, key}
    }
    let readLine = input.shift();

    while (readLine !== "Stop") {
        let [command, ...tokens] = readLine.split("|");

        if (command == "Add") {
            let piece = tokens[0];
            let composer = tokens[1];
            let key = tokens[2];

            if (pieces.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                pieces[piece] = {composer, key}
            }
        } else if (command == "Remove") {
            let piece = tokens[0];

            if (pieces.hasOwnProperty(piece)) {
                console.log(`Successfully removed ${piece}!`);
                delete pieces[piece];
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command == "ChangeKey") {
            let piece = tokens[0];
            let key = tokens[1];

            if (pieces.hasOwnProperty(piece)) {
                pieces[piece].key = key;
                console.log(`Changed the key of ${piece} to ${key}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

        readLine = input.shift()
    }
    for (const key in pieces) {
        console.log(`${key} -> Composer: ${pieces[key].composer}, Key: ${pieces[key].key}`);
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