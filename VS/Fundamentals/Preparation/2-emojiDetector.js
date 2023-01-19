function emojiDetector (input) {
    let numbersRegExp = /\d/g;
    let emojiRegExp = /([:]{2}|[*]{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let str = input.shift();

    let coolTreshold = 1;
    let countEmojis = 0;
    let coolEmojis = [];

    let matchedNumbers = numbersRegExp.exec(str);

    while (matchedNumbers !== null) {
        coolTreshold *= Number (matchedNumbers[0])
        matchedNumbers = numbersRegExp.exec(str);
    }
    
    let matchedEmojis = emojiRegExp.exec(str)
    while (matchedEmojis !== null) {
        countEmojis++;
        let emojiName = matchedEmojis.groups["emoji"];
        let sum = 0;
        for (const char of emojiName) {
            sum += Number (char.charCodeAt())
        }
        if (sum >= coolTreshold) {
            coolEmojis.push(matchedEmojis[0])
        }

        matchedEmojis = emojiRegExp.exec(str);
    }
    
    console.log(`Cool threshold: ${coolTreshold}`);
    console.log(`${countEmojis} emojis found in the text. The cool ones are:`);
    for (const el of coolEmojis) {
        console.log(el);
    }
    


}
emojiDetector (["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])