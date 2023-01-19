function mirrorWords (input) {
    let str = input.shift();
    let wordRegExp = /([@#])(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g
    let mirrorWords = []

    let matched = str.match(wordRegExp);
      if (matched !== null) {
        let length = matched.length;
        console.log(`${length} word pairs found!`);
      } else {
        console.log("No word pairs found!");
      }
    let mirrors = wordRegExp.exec(str);

    while (mirrors !== null) {
        let firstWord = mirrors.groups["word1"];
        let secondWord = mirrors.groups["word2"];
        let checkWord = firstWord.split("").reverse().join("");

        if (checkWord === secondWord) {
            mirrorWords.push(`${firstWord} <=> ${secondWord}`)
        }
        mirrors = wordRegExp.exec(str);
    }
    if (mirrorWords.length > 0) {
        console.log("The mirror words are:");
        console.log(mirrorWords.join(", "));
    } else {
        console.log("No mirror words!");
    }


    
}
mirrorWords ([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]
    )