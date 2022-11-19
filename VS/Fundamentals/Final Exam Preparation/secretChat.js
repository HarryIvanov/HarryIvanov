function secretChat (input) {
    let message = input.shift()
    let readLine = input.shift()

    while (readLine !== "Reveal") {
        let [command, ind, replacement] = readLine.split(":|:");
        if (command == "ChangeAll") {
            while (message.indexOf(ind) >= 0) {
                message = message.replace(ind, replacement)
            }
            console.log(message);
        } else if (command == "Reverse") {
            let reversed = ind.split("").reverse().join("")
            let index = message.indexOf(ind)
            let length = ind.length
            if (index >= 0) {
                message = message.replace(ind,"")
                message = `${message}${reversed}`
                console.log(message);
            } else {
                console.log("error");
            }

            
        } else if (command == "InsertSpace") {
            let newMessage1 = message.slice(0, ind)
            let newMessage2 = message.slice(ind)
            message = `${newMessage1} ${newMessage2}`
            console.log(message);
        }

        readLine = input.shift()
    }
    console.log(`You have a new text message: ${message}`);

}
secretChat ([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:are',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  )