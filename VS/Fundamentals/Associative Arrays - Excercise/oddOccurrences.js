function oddOccurrences (input) {
    let words = new Map ()
    let array = input.split(" ")
    for (let key of array) {
        let w = key.toLowerCase()
        if (words.has(w)) {
            let n = words.get(w)
            words.set(w, n + 1)
        } else {
            words.set(w, 1)
        }
    }
    let filter = Array.from(words).filter(([key, value]) =>{
        return value % 2 !== 0
    });
    let result =[]
    for (const [el, value] of filter) {
        result.push(el)
    }
    console.log(result.join(" "));
}
oddOccurrences ('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')