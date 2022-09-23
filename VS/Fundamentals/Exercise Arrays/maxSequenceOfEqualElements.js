function maxSequenceOfEqualElements (array) {
let counter = 0;
let checker = [];
let magicN = []

for (let i = 0; i < array.length; i++) {
    let number = array[i];
    let insideCounter = 0;
    magicN = [number]
    
    for (let x = i+1; x < array.length; x++) {
        let secondNumber = array[x]
        if (secondNumber == number) {
            magicN.push(array[x])
            insideCounter++
            
        } else {
            break;
        }
    
    
    }
    if (insideCounter > counter) {
        counter = insideCounter
        checker = magicN
    }
    
}
    console.log(checker.join(" "));
}
maxSequenceOfEqualElements ([0, 1, 1, 5, 2, 2, 6, 3, 3])