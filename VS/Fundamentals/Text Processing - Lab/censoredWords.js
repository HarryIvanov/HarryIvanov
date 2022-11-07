function censoredWords (str, word) {
    let newWord = "*".repeat(word.length)
    let newStr = str.split(word)
    let result = newStr.join(newWord);
    console.log(result);
}
censoredWords ('A small sentence small with some words', 'small')