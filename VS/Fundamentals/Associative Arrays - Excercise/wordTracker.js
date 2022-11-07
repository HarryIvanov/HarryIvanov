function wordTracker (input) {
    let magicWords = {};
    let words = input.shift().split(" ")
    for (const el of words) {
        
        magicWords[el] = 0
    }
    for (const el of input) {
        if (magicWords.hasOwnProperty(el)) {
            magicWords[el]++
        }
    }
    let entries = Object.entries(magicWords)
    let sorted = Array.from(entries.values()).sort(([keyA, valueA], [keyB, valueB]) =>{
        return valueB - valueA
    });
    for (const [key, value] of sorted) {
      console.log(`${key} - ${value}`);
    }

}
wordTracker ([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    
    )