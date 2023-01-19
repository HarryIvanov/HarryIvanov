function WordsUppercase (str) {
    let regExp = /[A-z0-9]+/g
    let matched = str.match(regExp);
    console.log(matched.join(", ").toUpperCase());
    

}
WordsUppercase ('Hi, how are you?')