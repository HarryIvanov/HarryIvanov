function charactersInRange (firstSymbol, secondSymbol) {
   let startChar = firstSymbol.charCodeAt(0);
   let endChar = secondSymbol.charCodeAt(0);
   let charsInRange = []
    if (startChar > endChar) {
        for (let i = endChar+1; i <startChar;i++) {
            let char = String.fromCharCode(i)
            charsInRange.push(char)
        }
    } else {
        for (let i = startChar+1; i < endChar; i++) {
            let char = String.fromCharCode(i)
            charsInRange.push(char)
        }
    }
    console.log(charsInRange.join(" "));
}
charactersInRange ('#', ':')