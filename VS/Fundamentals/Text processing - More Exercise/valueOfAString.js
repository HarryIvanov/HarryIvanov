function valueOfAString (input) {
let message = input.shift();
let command = input.shift();
let total = 0;

    if (command == "UPPERCASE") {
        for (const char of message) {
            if (char == char.toUpperCase()){
                if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
                    let num = Number (char.charCodeAt(0))
                    total += num;
                }   
            }
        }
    } else if (command == "LOWERCASE") {
        for (const char of message) {
            if (char == char.toLowerCase()){
                if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
                    let num = Number (char.charCodeAt(0))
                    total += num;
                } 
            }
        }
    }
    console.log(`The total sum is: ${total}`);
}
valueOfAString (['HelloFromMyAwesomePROGRAM',
'LOWERCASE']
)
valueOfAString (['AC/DC',
'UPPERCASE']
)