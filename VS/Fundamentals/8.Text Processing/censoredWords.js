function censored (str) {
    let [sentence, magicWord] = str.split(", ");
    while (sentence.indexOf(magicWord) >= 0) {
        sentence = sentence.replace(magicWord, "*".repeat(magicWord.length))
    }
    console.log(sentence);
    
}

censored ("A small sentence small with some words, small")