function train(command) {
    let array = command.shift().split(" ").map(Number);
    let maxPassengers = Number (command.shift())
    for (let i = 0; i < command.length; i++) {
        let [commands, firstNum] = command[i].split(" ");
        firstNum = Number(firstNum);
        if (commands == "Add") {
            array.push(firstNum);
        } else {
            let num = Number(commands);
            for (let x = 0; x < array.length; x++) {
                let wagon = Number(array[x]);
                if (wagon + num <= maxPassengers) {
                    let sum = wagon + num;
                    array[x] = sum;
                    break;
                }
            }
        }
    }
    console.log(array.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
