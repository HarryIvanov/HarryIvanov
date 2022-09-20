function darts (input) {
let name = input[0];
let shots = 0;
let won = true;
let totalPoints = 301;
let points = 0;
let fakeShots = 0;

let index = 1;
let counter = input[index];

    while (counter !== `Retire`) {
        index++;
        points = Number (input[index]);
        shots++;
        if (counter === `Triple`) {
            points = points * 3
            
        } else if (counter === `Double`) {
            points = points * 2
            
        }
        totalPoints = totalPoints - points
        if (totalPoints === 0) {
            won = false;
            break;
        } if (totalPoints < 0) {
            fakeShots++
            shots--
            totalPoints = totalPoints + points
            index++
            counter = input[index];
            continue;
        }
        index++;
        counter = input[index];
    }
if (!won) {
    console.log (`${name} won the leg with ${shots} shots.`)
} else {
    console.log (`${name} retired after ${fakeShots} unsuccessful shots.`)
}



}
darts (["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"])


