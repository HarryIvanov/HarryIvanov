function theImitationGame (input) {
    let message = input.shift();
    let readLine = input.shift();

    while (readLine !== "Decode") {
        let [command, token1, token2] = readLine.split("|");
        if (command == "Move") {
            let index = Number (token1);
            let firstLine = message.substring(0,index);
            let secondLine = message.substring(index)
            message = secondLine + firstLine;
        } else if (command == "Insert") {
            let index = Number (token1);
            let firstLine = message.substring(0,index);
            let secondLine = message.substring(index);
            message = firstLine + token2 + secondLine;
        } else if (command == "ChangeAll") {
            while (message.indexOf(token1) >= 0) {
                message = message.replace(token1, token2);
            }
        }


        readLine = input.shift()
    }
    console.log(`The decrypted message is: ${message}`);
}
theImitationGame ([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ]
  
  )