function secretChat (input) {
    let message = input.shift();
    let readLine = input.shift();

    while (readLine !== "Reveal") {
        let [command, ...tokens] = readLine.split(":|:");
        if (command == "InsertSpace") {
            let index = Number (tokens[0]);
            let firstHalf = message.substring(0, index);
            let secondHalf = message.substring(index);
            message = `${firstHalf} ${secondHalf}`
            console.log(message);
        } else if (command == "Reverse") {
            let toReverse = tokens[0];
            if (message.includes(toReverse)) {
                let reversed = toReverse.split("").reverse().join("")
                message = message.replace(toReverse,"")
                message = `${message}${reversed}`
                console.log(message);
            } else {
                console.log("error");
            }
        } else if (command == "ChangeAll") {
            let toChange = tokens[0];
            let changeWith = tokens[1];
            while (message.indexOf(toChange) >= 0) {
                message = message.replace(toChange, changeWith);
            }
            console.log(message);
        }

        readLine = input.shift()
    }
    console.log(`You have a new text message: ${message}`);
}
secretChat ([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]  
  )