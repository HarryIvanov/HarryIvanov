function dishwasher (input) {
let index = 0;
let command = input[index];
index++;

let cycle = 0;
let detergent = Number (input[0]) * 750
let mls = 0;
isEnough = true;
let dishes = 0;
let pots = 0;
let leftover = 0;



while (command !== "End") {
    let det = Number (input[index]);
    index++
    cycle++;
    if (cycle % 3 === 0) {
        mls = 15;
        pots += det;
    } else {
        dishes += det
        mls = 5
    }
    leftover = leftover + (det * mls)
    if (leftover > detergent) {
        isEnough = false;
        break;
    }
    command = input[index];
}
if (!isEnough) {
    let diff = Math.abs (leftover - detergent)
    console.log(`Not enough detergent, ${diff} ml. more necessary!`);
} else {
    let diff = detergent - leftover
    console.log("Detergent was enough!");
    console.log(`${dishes} dishes and ${pots} pots were washed.`);
    console.log(`Leftover detergent ${diff} ml.`);
}




}
dishwasher ([`1`,`10`,`15`,`10`, `12`, `13`, `30`, `End`])