function emojiDetector (input) {
    let text = input.shift();
    let digits = text.matchAll(/\d/g);
    let threshold = 1;
    let emojiCount = 0;
    let coolEmojis = []

    for (const el of digits) {
        let digit = Number (el[0]);
        threshold *= digit
    }
    let emojis = []
    let emojiMatches = text.matchAll(/(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g)
    for (const el of emojiMatches) {
        emojiCount++
        let emojiCoolness = 0;
        let emojiName = el.groups.emoji
        for (let i = 0; i < emojiName.length; i++) {
            emojiCoolness += emojiName.charCodeAt(i)
        }
        if (emojiCoolness >= threshold) {
            emojis.push(el[0])
        }
    }
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    for (const el of emojis) {
        console.log(el);
    }




}
emojiDetector (["In the Sofia Zoo there are 311 animals in total ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:,12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21different types of :Snak::Es::. ::Mooning:: **Shy**"])