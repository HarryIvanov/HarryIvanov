function manOWar (array) {
    let pirateShip = array.shift().split(">").map(x => x = Number(x))
    let warShip = array.shift().split(">").map(x => x = Number(x))
    let maxHealth = Number (array.shift())
    let lost = false;
    let win = false;

    for (let i = 0; i < array.length; i++) {
        if (lost || win) {
            break;
        }
        if (array[i].includes("Retire")) {
            break;
        }
        if (array[i].includes("Status")) {
            let sections = 0;
            for (let el of pirateShip) {
                let num = ((el / maxHealth)*100);
                if (num < 20) {
                    sections++;
                }
            }
            console.log(`${sections} sections need repair.`);
        }
        if (array[i].includes("Defend")) {
            let [command, startIndex,endIndex,damage] = array[i].split(" ")
            startIndex = Number (startIndex);
            endIndex = Number (endIndex);
            damage = Number (damage);
            if (startIndex < 0 || startIndex >= pirateShip.length) {
            continue;
            } 
            if (endIndex < 0 || endIndex >= pirateShip.length) {
                continue;
            }
            else {
                for (let x = startIndex; x <= endIndex; x++) {
                    pirateShip[x] = Number (pirateShip[x] - damage)
                    if (Number (pirateShip[x]) <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        lost = true;
                        break;
                    }
                }
            }
        }
        if (array[i].includes("Repair")) {
            let [command, index, health] = array[i].split(" ")
            index = Number (index);
            health = Number (health)
            if (index < 0 || index >= pirateShip.length) {
                continue;
            } else {
                pirateShip[index] = Number (pirateShip[index] + health)
                if (Number (pirateShip[index]) > maxHealth) {
                    pirateShip[index] = maxHealth;
                }
            }
        }
        if (array[i].includes("Fire")) {
            let [command, index, damage] = array[i].split(" ") 
            index = Number (index);
            damage = Number (damage);
            if (index < 0 || index >= warShip.length) {
                continue;
            } else {
                warShip[index] = Number (warShip[index] - damage) 
                    if (Number (warShip[index]) <= 0) {
                        console.log("You won! The enemy ship has sunken.");
                        win = true;
                        break;
                    }
                }
            
        }
    }
    if (!lost && !win) {
        let pirateStatus = 0;
        let warStatus = 0;
        for (let el of pirateShip) {
            pirateStatus += Number (el)
        }
        for (let el of warShip) {
            warStatus += Number (el)
        }
        console.log(`Pirate ship status: ${pirateStatus}`);
        console.log(`Warship status: ${warStatus}`);
    }
    
}
manOWar (["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"])

