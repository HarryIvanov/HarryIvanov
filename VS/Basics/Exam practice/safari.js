function safari (input) {
let budget = Number (input[0]);
let fuel = Number (input[1]) * 2.10;
let day = input[2];

let total = fuel + 100

if (day === `Sunday`) {
    total = total * 0.80;
} else if (day === `Saturday`) {
    total = total * 0.90
}

if (total < budget) {
    let diff = budget - total
    console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);
} else {
    let diff = total - budget
    console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
}




} safari (["120",
"30",
"Saturday"])
