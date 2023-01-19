function worldTour (input) {
    let message = input.shift();
    let readLine = input.shift();

    while (readLine !== "Travel") {
        let [command,...tokens] = readLine.split(":");

        if (command == "Add Stop") {
            let index = Number (tokens[0]);
            let str = tokens[1];

            if (message[index]) {
                let firstHalf = message.substring(0,index);
                let secondHalf = message.substring(index);
                message = firstHalf + str + secondHalf
                console.log(message);
            } else {
                console.log(message);
            }
        } else if (command == "Remove Stop") {
            let startIndex = Number (tokens[0]);
            let endIndex = Number (tokens[1]);

            if (message[startIndex] && message[endIndex]) {
                let tempMessage = message.substring(startIndex, endIndex+1);
                message = message.replace(tempMessage, "")
                console.log(message);
            } else {
                console.log(message);
            }
        } else if (command == "Switch") {
            let oldString = tokens[0];
            let newString = tokens[1];

            if (message.includes(oldString)) {
                message = message.replace(oldString, newString);
                console.log(message);
            } else {
                console.log(message);
            }
        }

        readLine = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${message}`);
}
worldTour (["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"])
