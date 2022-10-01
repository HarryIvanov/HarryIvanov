function dungeonestDark (array) {
let health = 100;
let coins = 0;
let room = 0;
let newArr = array[0].split("|");
isDead = false;

    for (let i = 0; i < newArr.length; i++) {
        let breakArr = newArr[i].split(" ")
        if (isDead) {
            break;
        }
        for (let x =0; x < breakArr.length; x++) {
            room++;
            let command = breakArr[x];
            if (command === 'potion') {
                let healed = breakArr[x+1];
                health += Number (healed);
                if (health > 100) {
                    healed = healed - (health - 100);
                    console.log(`You healed for ${healed} hp.`);
                    health = 100;
                } else {
                    console.log(`You healed for ${healed} hp.`);
                }
                console.log(`Current health: ${health} hp.`);
            } else if (command === 'chest') {
                let gold = Number (breakArr[x+1])
                coins += gold
                console.log(`You found ${gold} coins.`);
            } else {
                let monster = breakArr[x];
                let damage = Number (breakArr[x+1]) 
                health -= damage
                if (health <= 0) {
                    console.log(`You died! Killed by ${monster}.`);
                    console.log(`Best room: ${room}`);
                    isDead = true;
                    break;
                } else {
                    console.log(`You slayed ${monster}.`);
                }
            }
            x++
            
        }    
        
        
    }
    if (!isDead) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
    
}
dungeonestDark (["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])