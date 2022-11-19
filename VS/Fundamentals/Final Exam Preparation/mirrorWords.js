function mirrorWords(input) {
    let regExp = /([@#])(?<word1>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g
    let str = input.shift()
    let matched = str.match(regExp)

    if (matched) {
        let len = matched.length
        console.log(`${len} word pairs found!`);
    } else {
        console.log("No word pairs found!");
    }
    let check = regExp.exec(str)
    let final = []
    while (check !== null) {
        let word1 = check.groups["word1"];
        let word2 = check.groups["word2"].split("").reverse().join("");
        if (word1 == word2) {
            let result = `${word1} <=> ${check.groups["word2"]}`
            final.push(result)
        }
        check = regExp.exec(str)
    }
    if (final.length > 0) {
        console.log("The mirror words are: ");
        console.log(final.join(", "));
    } else {
        console.log("No mirror words!");
    }

}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
)