function worldTour (input) {
    let str = input.shift()
    let readLine = input.shift()
    while(readLine !== "Travel") {
        let [command, token1, token2] = readLine.split(":")
        if (command == "Add Stop") {
            let index = Number (token1);
            if (str[index] !== undefined) {
                let firstHalf = str.substring(0, index)
                let secondHalf = str.substring(index)
                str = firstHalf + token2 + secondHalf
            }
            console.log(str);
            
        } else if (command == "Remove Stop") {
            let n1 = Number (token1);
            let n2 = Number (token2)
            if (str[n1] !== undefined && str[n2] !== undefined) {
                let toRemove = str.substring(n1, n2+1)
                str = str.replace(toRemove, "")
            }
            console.log(str);
        } else if (command == "Switch") {
            if (str.includes(token1)) {
                str = str.replace(token1, token2)
            }
            console.log(str);
        }

        readLine = input.shift()
    }
    console.log(`Ready for world tour! Planned stops: ${str}`);

}
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:41:8",
"Switch:Albania: Azərbaycan",
"Travel"])
