function lettersChangeNumbers (str) {
    let table = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let workTable = str.split(" ")   
    let result = []
    
    for(let i = 0; i < finalRotations; i++) {
        let sum = 0;
        let work = workTable.shift();
        let replaced = work.replace(/\D/g, '');
        for (let i = 0; i < work.length; i++) {
            let word = work[i]
            if (word.charCodeAt(0) >= 48 && word.charCodeAt(0) <= 57) {
                continue;
            } else {
                if (word == word.toUpperCase() && i == 0) {   
                    let index = Number (table.indexOf(word.toLowerCase()) + 1)
                    sum = Number (replaced) / index;
                } else if (word == word.toUpperCase() && i > 0) {
                    let index = Number (table.indexOf(word.toLowerCase()) + 1)
                    sum -= index
                } else if (word == word.toLowerCase() && i == 0) {
                    let index = Number (table.indexOf(word) + 1)
                    sum = Number (replaced) * index;    
                } else if (word == word.toLowerCase() && i > 0) {
                    let index = Number (table.indexOf(word) + 1)
                    sum += index
                }
            }
        }
        result.push(sum)
    }
    let finalRes = 0
    for (const el of result) {
        finalRes += Number (el)
    }
    console.log(finalRes.toFixed(2));


}
lettersChangeNumbers ('A12b s17G')