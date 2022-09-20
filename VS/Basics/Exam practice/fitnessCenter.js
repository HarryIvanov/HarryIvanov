function fitness (input) {
let index = 0;
let visitors = Number (input[0]);
index++
let back = 0;
let chest = 0;
let legs = 0;
let abs = 0;
let protShake = 0;
let protBar = 0;
let proteins = 0;
let visits = 0;

    for (let i = 0; i < visitors; i++) {
    let type = input[index];
    if (type === `Back`) {
        back++
        visits++
    } else if (type === `Chest`) {
        chest++
        visits++
    } else if (type === `Legs`) {
        legs++
        visits++
    } else if (type === `Abs`) {
        abs++
        visits++
    } else if (type === `Protein shake`) {
        protShake++
        proteins++
    } else {
        protBar++
        proteins++
    }
    index++


    }
    let protPercent = proteins / visitors * 100
    let workout = visits / visitors * 100

    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${protShake} - protein shake`);
    console.log(`${protBar} - protein bar`);
    console.log(`${workout.toFixed(2)}% - work out`);
    console.log(`${protPercent.toFixed(2)}% - protein`);

}
fitness (["10",
"Back",
"Chest",
"Legs",
"Abs",
"Protein shake",
"Protein bar",
"Protein shake",
"Protein bar",
"Legs",
"Abs"])
