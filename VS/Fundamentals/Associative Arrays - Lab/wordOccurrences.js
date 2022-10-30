function wordOccurrences (input) {
    let myMap = new Map ();
    for (const word of input) {
        if (!myMap.has(word)) {
            myMap.set(word, 1)
        } else {
            let n1 = myMap.get(word)
            n1++
            myMap.set(word, n1)
        }
    }
    let sorted = Array.from(myMap.entries()).sort(([keyA, valueA], [keyB, valueB]) =>{
        return valueB - valueA
    })
    for (const [word, num] of sorted) {
        console.log(`${word} -> ${num} times`);
    }
}
wordOccurrences (["Here", "is", "the", "first", "sentence", "Here", "is", "another", 
"sentence", "And", "finally", "the", "third", "sentence"])