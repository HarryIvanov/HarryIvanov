function club (input) {
let index = 0;
let goal = Number (input[index]);
index++;
let command = input[index];
index++;
let total = 0;
let isAquired = false;

while (command !== "Party!") {
    let coctails = Number (input[index]);
    index++;
    let price = command.length * coctails;

    if (price % 2 === 1) {
        price = price * 0.75
    }
    total += price
    if (total >= goal) {
        console.log("Target acquired.");
        // console.log(`Club income - ${total.toFixed(2)}`);
        isAquired = true;
        break;
    }
    command = input[index];
    index++

}
    if (!isAquired) {
        let diff = Math.abs (goal - total);
        console.log(`We need ${diff.toFixed(2)} leva more.`);
    }
    console.log(`Club income - ${total.toFixed(2)} leva.`)




}
club (["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])
