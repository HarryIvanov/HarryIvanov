function theHuntingGames (input) {
    let days = Number (input.shift());
    let players = Number (input.shift());
    let energy = Number (input.shift());
    let waterPerDay = Number (input.shift());
    let foodPerDay = Number (input.shift());

    let totalWater = players * days * waterPerDay;
    let totalFood = players * days * foodPerDay;
    let totalEnergy = 0;
    let counter = 1;

    for (let i = 0; i < days; i++) {
        energy -= Number (input[i])
        if (energy <= 0) {
            break;
        }
        if (counter % 2 == 0) {
            totalWater *= 0.7;
            energy = energy * 1.05
            
        }
        if (counter % 3 == 0) {
            totalFood -= (totalFood / players)
            energy = energy * 1.10
        } 
        counter++
        
        
        
    }
    if (energy <= 0) {
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    } else {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    }


}
theHuntingGames (["10",
"7",
"5035.5",
"11.3",
"7.2",
"942.3",
"500.57",
"520.68",
"540.87",
"505.99",
"630.3",
"784.20",
"321.21",
"456.8",
"330"])

