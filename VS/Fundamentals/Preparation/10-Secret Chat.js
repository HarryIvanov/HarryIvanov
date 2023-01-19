function secretChat (input) {
    let message = input.shift();
    let readLine = input.shift();

    while (readLine !== "Reveal") {
        let [command,...tokens] = readLine.split(":|:");

        if (command == "InsertSpace") {
            let index = Number (tokens[0]);
            let firstHalf = message.substring(0, index);
            let secondHalf = message.substring(index);

            message = `${firstHalf} ${secondHalf}`
            console.log(message);
        } else if (command == "Reverse") {
            let substring = tokens[0];

            if (message.includes(substring)) {
                message = message.replace(substring, "");
                let subs = substring.split("").reverse().join("");
                message = message + subs;
                console.log(message);
            } else {
                console.log("error");
            }
        } else if (command == "ChangeAll") {
            let substring = tokens[0];
            let replacement = tokens[1];

            while (message.indexOf(substring) >= 0) {
                message = message.replace(substring, replacement);
            }
            console.log(message);
        }

        readLine = input.shift();
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
  ])