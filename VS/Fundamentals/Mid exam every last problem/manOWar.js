function War(input) {
    let pirateShip = input
        .shift()
        .split(">")
        .map((x) => Number(x));
    let warShip = input
        .shift()
        .split(">")
        .map((x) => Number(x));
    let maxHealth = Number(input.shift());
    let index = 0;
    let readLine = input[index];
    index++;
    let warshipHasSunk = false;
    let pirateshipHasSunk = false;

    while (readLine !== "Retire") {
        let [command, startInd, endInd, damage] = readLine.split(" ");
        startInd = Number(startInd);
        damage = Number(damage);
        endInd = Number(endInd);
        if (command == "Fire") {
            if (warShip[startInd]) {
                warShip[startInd] -= endInd;
                if (warShip[startInd] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    warshipHasSunk = true;
                    break;
                }
            }
        } else if (command == "Defend") {
            if (pirateShip[startInd] && pirateShip[endInd]) {
                for (let i = startInd; i <= endInd; i++) {
                    pirateShip[i] -= damage;
                    if (pirateShip[i] <= 0) {
                        pirateshipHasSunk = true;
                        console.log("You lost! The pirate ship has sunken.");
                        break;
                    }
                }
            }
        } else if (command == "Repair") {
            if (pirateShip[startInd]) {
                pirateShip[startInd] += endInd;
                if (pirateShip[startInd] > maxHealth) {
                    pirateShip[startInd] = maxHealth;
                }
            }
        } else if (command == "Status") {
            let count = 0;
            for (let el of pirateShip) {
                let sum = (Number(el) / maxHealth) * 100;
                if (sum < 20) {
                    count++;
                }
            }
            if (count > 0) {
                console.log(`${count} sections need repair.`);
            }
        }

        readLine = input[index];
        index++;
    }
    if (!warshipHasSunk && !pirateshipHasSunk) {
        let pirateSum = 0;
        let warSum = 0;
        for (let el of pirateShip) {
            pirateSum += el;
        }
        for (let el of warShip) {
            warSum += el;
        }
        console.log(`Pirate ship status: ${pirateSum}`);
        console.log(`Warship status: ${warSum}`);
    }
}
War([
    "2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire",
]);
