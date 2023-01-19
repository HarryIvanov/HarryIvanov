function theImitationGame (input) {
    let message = input.shift();
    let readLine = input.shift();

    while (readLine !== "Decode") {
        let [command, ...tokens] = readLine.split("|");

        if (command == "Move") {
            let letters = Number (tokens[0]);
            let lettersToMove = message.substring(0, letters);
            message = message.replace(lettersToMove, "");
            message = message + lettersToMove;
        } else if (command == "Insert") {
            let index = Number (tokens[0]);
            let value = tokens[1];
            let firstLine = message.substring(0,index);
            let secondLine = message.substring(index);
            message = firstLine + value + secondLine;
        } else if (command == "ChangeAll") {
            let substring = tokens[0];
            let replacement = tokens[1];

            while (message.indexOf(substring) >= 0) {
                message = message.replace(substring, replacement)
            }
        }


        readLine = input.shift();
    }
    console.log(`The decrypted message is: ${message}`);

}
theImitationGame ([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ])
  theImitationGame ([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ]
  )