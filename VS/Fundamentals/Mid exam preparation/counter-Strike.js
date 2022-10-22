function counterStrike (array) {
    let index = 0;
    let energy = Number (array[index]);
    let command = array[index];
    index++;
    let wonBattles = 0;
        while (command !== "End of battle") {
           
                
            let distance = Number (array[index]);
            
            if (distance <= energy) {
                energy -= distance
                wonBattles++
                if (wonBattles % 3 === 0) {
                    energy += wonBattles
                }
            } else if (distance > energy) {
                
                console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
                break;
            }
            
            
            index++;
            command = array[index];

        }
        if (command ===  "End of battle") {
            console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
            
        }
}
counterStrike (["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])




