function countStringOccurrences (str, word) {
    let arrayStr = str.split(" ");
    let count = 0;
    for (const el of arrayStr) {
        if (el === word) {
            count++
        }
    }
    console.log(count);
}
countStringOccurrences ('This is a word and it also is a sentence',
'is'
)
