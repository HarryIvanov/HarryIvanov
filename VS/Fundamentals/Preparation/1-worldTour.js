function worldTour (input) {
    let stops = input.shift();
    let readLine = input.shift();

    while (readLine !== "Travel") {
        let [command, ...tokens] = readLine.split(":");

        if (command == "Add Stop") {
            let index = Number (tokens[0]);
            let newStop = tokens[1];

            if (stops[index] !== undefined) {
                let firstLine = stops.substring(0,index);
                let secondLine = stops.substring(index);

                stops = firstLine + newStop + secondLine
                console.log(stops);
            } else {
                console.log(stops);
            }
        } else if (command == "Remove Stop") {
            let startIndex = Number (tokens[0]);
            let endIndex = Number (tokens[1]);
            let check = Number (stops.length)

            if (stops[startIndex] !== undefined && stops[endIndex] !== undefined) {
                let stopToDelete = stops.substring(startIndex, endIndex+1);

                stops = stops.replace(stopToDelete, "");
                console.log(stops);
            } else {
                console.log(stops);
            }
        } else if (command == "Switch") {
            let oldString = tokens[0];
            let newString = tokens[1];

            if (stops.includes(oldString)) {
                
                    stops = stops.replace(oldString, newString);
                    index = Number (stops.indexOf(oldString));
            
                console.log(stops);
            } else {
                console.log(stops);
            }
        }

        readLine = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
    
}
worldTour (["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"])

