function serializeString (input) {
    let message = input.shift()
    let filter = new Set (message);
    
    for (const char of filter) {
        let total = [];
        for (let i = 0; i < message.length; i++) {
            let el = message[i];
            if (el == char) {
                total.push(i)
            }
        }
        console.log(`${char}:${total.join("/")}`);
    }
}
serializeString (["avjavamsdmcalsdm"])