function arrayManipulator (input, commands) {
    
    for (let i = 0; i < commands.length; i++) {
        let masive = commands[i].split(" ")
        if (masive.includes('add')) {
            let index = Number (masive[1]);
            let element = Number (masive[2]);
            input.splice(index, 0, element);
            
        } else if (masive.includes('addMany')) {
            let index = masive[1] 
            masive.splice(0, 2); 
            let nums = masive.map(Number);
            input.splice(index, 0, ...nums);
        } else if (masive.includes('contains')) {
            let num = Number (masive[1].split(" "));
            let check = Number (input.indexOf(num));
            console.log(check);
        } else if (masive.includes('remove')) {
            let index = Number (masive[1]);
            input.splice(index, 1)  
        } else if (masive.includes('shift')) {
            let shift = Number (masive[1]);
            for (let i = 0; i < shift; i++) {
                let num = Number (input.shift())
                input.push(num)
            }
        } else if (masive.includes('sumPairs')) {
           if (input.length % 2 !== 0) {
            input.push(0)
           }
           let newArr = []
           for (let x = 0; x < input.length - 1; x += 2) {
            let sum = input[x] + input[x + 1]
            newArr.push(sum)
           }
           input = newArr
        } else if (masive.includes('print')) {
           console.log(`[ ${input.join(", ")} ]`);
            
            break;
        }

    }

}
arrayManipulator ([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
    ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])