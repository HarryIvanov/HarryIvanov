function deserializeString (input) {
let readLine = input.shift();
let message = [];

    while (readLine !== "end") {
        let char = readLine.split(":").shift()
        let regExp = /\d+/g
        let matched = readLine.match(regExp);
        for (const el of matched) {
            let n = Number (el);
            message[n] = char
        }
        readLine = input.shift()
    }
    console.log(message.join(""));
}
deserializeString (['a:0/2/4/6',
'b:1/3/5',
'end']

)