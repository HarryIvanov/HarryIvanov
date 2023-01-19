function asciiSumator (input) {
    let firstSymbol = input.shift();
    let secondSymbol = input.shift();
    let message = input.shift();
    let total = 0;

    let firstIndex = Number (firstSymbol.charCodeAt(0));
    let secondIndex = Number (secondSymbol.charCodeAt(0));
    if (firstIndex > secondIndex) {
        firstIndex = Number (secondSymbol.charCodeAt(0));
        secondIndex = Number (firstSymbol.charCodeAt(0));
    }

    for (const char of message) {
        let num = char.charCodeAt(0);
        if (num > firstIndex && num < secondIndex) {
            total += num
        }
    }
    console.log(total);

}
asciiSumator (['a',
'1',
'jfe392$#@j24ui9ne#@$'])