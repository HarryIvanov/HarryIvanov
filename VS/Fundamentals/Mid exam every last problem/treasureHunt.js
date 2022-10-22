function treasureHunt (input) {
    let inventory = input.shift().split("|")
    let length = []
    let isEmpty = false;
    for (let el of input) {
        length.push(el)
    }
    let index = 0;
    let readLine = length[index];
    index++;

    while (readLine !== "Yohoho!") {
        let line = input.shift().split(" ");
        let command = line.shift().toString()
        if (command == "Loot") {
            for (let i = 0; i < line.length; i++) {
                let item = line[i].toString();
                if (!inventory.includes(item)) {
                    inventory.unshift(item);
                }
            }
        } else if (command == "Drop") {
            let indexToDrop = Number (line[0])
            if (inventory[indexToDrop]) {
                let itemToDrop = inventory.splice(indexToDrop, 1)
                inventory.push(itemToDrop)
            }
        } else if (command == "Steal") {
            let itemsToDelete = Number (line[0]);
            if (itemsToDelete >= inventory.length) {
            console.log(inventory.join(", "));
            inventory.splice(0)
            } else {
               let deletedItems = inventory.splice(-itemsToDelete);
               console.log(deletedItems.join(", "));
            }
        }

        readLine = length[index];
        index++;
    }
    if (inventory.length <= 0) {
        console.log("Failed treasure hunt.");
    } else {
        let sum = 0;
        let count = 0;
        for (let el of inventory) {
            sum += el.length;
            count++
        }
        let average = sum / count
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`);
    }
}
treasureHunt (["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])


