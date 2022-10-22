function muOnline (str) {
    let arr = [str]
    let moves = arr[0].split("|")
    let totalHealth = 100;
    let coins = 0;
    let rooms = 1;
    isDead = false;
        for (let i = 0; i < moves.length; i++) {
            let [command, healthLost] = moves[i].split(" ")
            healthLost = Number (healthLost)
            if (command == "potion") {
                totalHealth += healthLost;
                rooms++;
                if (totalHealth > 100) {
                    healthLost = 100 - (totalHealth - healthLost)
                    totalHealth = 100;
                }
                console.log(`You healed for ${healthLost} hp.`);
                console.log(`Current health: ${totalHealth} hp.`);
            } else if (command == "chest") {
                coins += healthLost
                console.log(`You found ${healthLost} bitcoins.`);
                rooms++
            } else {
                totalHealth -= healthLost
                if (totalHealth > 0) {
                    console.log(`You slayed ${command}.`);
                    rooms++
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${rooms}`);
                    isDead = true;
                    break;
                }
            }
        }
        if (!isDead) {
            console.log("You've made it!");
            console.log(`Bitcoins: ${coins}`);
            console.log(`Health: ${totalHealth}`);
        }
}
muOnline ("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")