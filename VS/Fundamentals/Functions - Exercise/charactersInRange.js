function charactersInRange (firstSymbol, secondSymbol) {
   let startChar = Math.min(firstSymbol.charCodeAt(), secondSymbol.charCodeAt())
   let endChar = Math.max(firstSymbol.charCodeAt(), secondSymbol.charCodeAt())
    let charsInRange = []
   
        for (let i = startChar+1; i <endChar;i++) {
            let char = String.fromCharCode(i)
            charsInRange.push(char)
        }
   
    console.log(charsInRange.join(" "));
}
charactersInRange ('#', ':')