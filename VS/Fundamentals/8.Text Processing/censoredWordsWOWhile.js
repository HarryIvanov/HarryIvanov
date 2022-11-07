function censored (str) {
    let [sentence, magicWord] = str.split(", ")
    let newSentence = sentence.split(magicWord);
    let result = newSentence.join("*".repeat(magicWord.length))
    console.log(result);
}
censored ("A small sentence small with some words, small")