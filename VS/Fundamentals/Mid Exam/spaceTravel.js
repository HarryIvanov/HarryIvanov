function spaceTravel (array) {
    let ammos = Number (array.pop());
    let fuel = Number (array.pop());
    let newArr = array.shift().split("||");

    let index = 0;
    let readLine = newArr[index];
    index++;
    let failed = false;

    while (readLine !== "Titan") {
        let [command, integer] = readLine.split(" ");
        integer = Number (integer);
        if (command == "Travel") {
            if (fuel >= integer) {
                fuel -= integer;
                console.log(`The spaceship travelled ${integer} light-years.`)
            } else {
                console.log("Mission failed.");
                failed = true;
                break;
            }
        } else if (command == "Enemy") {
            if (ammos >= integer) {
                ammos -= integer;
                console.log(`An enemy with ${integer} armour is defeated.`);
            } else if (fuel >= integer * 2) {
                fuel -= integer * 2
                console.log(`An enemy with ${integer} armour is outmaneuvered.`);
            } else {
                console.log("Mission failed.");
                failed = true;
                break;
            }
        } else if (command == "Repair") {
            ammos += integer * 2;
            fuel += integer;
            let added = integer * 2
            console.log(`Ammunitions added: ${added}.`);
            console.log(`Fuel added: ${integer}.`);
        }

        readLine = newArr[index];
        index++
    }
    if (!failed) {
        console.log("You have reached Titan, all passengers are safe.");
    }
    
    
    
}
spaceTravel ([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
'60', 
'100' ])
