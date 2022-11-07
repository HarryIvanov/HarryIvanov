function activationKeys (input) {
    let rawActivationKey = input.shift()

    let readLine = input.shift()
    while (readLine !== "Generate") {
        let [command, token1, token2, token3] = readLine.split(">>>")
            if (command == "Contains") {
                if (!rawActivationKey.includes(token1)) {
                    console.log("Substring not found!");
                } else {
                    console.log(`${rawActivationKey} contains ${token1}`);
                }
            } else if (command == "Flip") {
                if (token1 == "Upper") {
                    let oldLetters = rawActivationKey.substring(token2, token3)
                    let newLetters = rawActivationKey.substring(token2, token3).toUpperCase()
                    rawActivationKey = rawActivationKey.replace(oldLetters, newLetters)
                    console.log(rawActivationKey);
                } else {
                    let oldLetters = rawActivationKey.substring(token2, token3)
                    let newLetters = rawActivationKey.substring(token2, token3).toLowerCase()
                    rawActivationKey = rawActivationKey.replace(oldLetters, newLetters)
                    console.log(rawActivationKey);
                }
            } else if (command == "Slice") {
                let letters = rawActivationKey.substring(token1, token2)
                rawActivationKey = rawActivationKey.replace(letters,"")
                console.log(rawActivationKey);
            }
        readLine = input.shift()
    }
    console.log(`Your activation key is: ${rawActivationKey}`);
}
activationKeys (["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])

