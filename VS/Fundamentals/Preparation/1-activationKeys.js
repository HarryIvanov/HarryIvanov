function activationKeys (input) {
    let message = input.shift();
    let readLine = input.shift();

    while (readLine !== "Generate") {
        let [command, ...tokens] = readLine.split(">>>");

        if (command == "Contains") {
            let checkString = tokens.shift();
            if (message.includes(checkString)) {
                console.log(`${message} contains ${checkString}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (command == "Flip") {
            let casing = tokens.shift();
            let startIndex = Number (tokens.shift());
            let endIndex = Number (tokens.shift());

            if (casing == "Upper") {
                let oldString = message.substring(startIndex, endIndex);
                let newString = oldString.toUpperCase();
                message = message.replace(oldString, newString);
                console.log(message);
            } else {
                let oldString = message.substring(startIndex, endIndex);
                let newString = oldString.toLowerCase();
                message = message.replace(oldString, newString);
                console.log(message);  
            }
        } else if (command == "Slice") {
            let startIndex = Number (tokens.shift());
            let endIndex = Number (tokens.shift());
            let stringToDelete = message.substring(startIndex, endIndex);
            message = message.replace(stringToDelete, "")
            console.log(message);
        }
        readLine = input.shift();
    }
    console.log(`Your activation key is: ${message}`);
}
activationKeys (["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])
