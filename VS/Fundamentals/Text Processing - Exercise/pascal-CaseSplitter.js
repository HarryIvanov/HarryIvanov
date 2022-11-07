function pascalCaseSplitter (str) {
    let result = []
    let word = str[0]

    for (let i = 1; i < str.length; i++) {
        if (str[i].toUpperCase() !== str[i]) {
            word = word.concat(str[i])
        } else {
            result.push(word)
            word = str[i]
        }
    }
    result.push(word)
    console.log(result.join(", "));
    
}
pascalCaseSplitter ('SplitMeIfYouCanHaHaYouCantOrYouCan')