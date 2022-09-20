function ranklist (input) {
let index = 0;
let tournaments = Number (input[index]);
index++
let startingPoints = Number (input[index]);
index++



let points = 0;
let wins = 0;

    for (let i = 0; i < tournaments; i++) {
        let counter = input[index]
        if (counter === `W`) {
            points += 2000
            wins++
        } else if (counter === `F`) {
            points += 1200
        } else {
            points += 720
        }
        index++
        counter = input[index]
        
    }

let finalPoints = points + startingPoints
let avgPoints = (points / tournaments)    
let pPoints = (wins / tournaments) * 100

console.log(`Final points: ${finalPoints}`);
console.log(`Average points: ${Math.floor(avgPoints)}`);
console.log(`${pPoints.toFixed(2)}%`);

    


}
ranklist (["4",
"750",
"SF",
"W",
"SF",
"W"])

