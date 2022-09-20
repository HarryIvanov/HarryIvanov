function sale (input) {
let index = 0;
let seaAdventures = Number (input[index]);
index++;
let mountainAdventures = Number (input[index]);
index++;
let type = input[index];
index++;

let sea = 0;
let mountain = 0;
let total = 0;
isDone = true;


while (type !== "Stop") {
    if (mountain == mountainAdventures && sea == seaAdventures) {
        isDone = false;
        break;
    }
    
    if (type === "sea") {
        if (sea >= seaAdventures) {
            type = input[index];
            index++;
            continue;
        } else {
            sea++;
            total += 680;
        }
    } else if (type === "mountain") {
        if (mountain >= mountainAdventures) {
            type = input[index];
            index++;
            continue;
        } else {
            mountain++;
            total += 499;
        }
    }
    type = input[index];
    index++
}
if (!isDone) {
    console.log("Good job! Everything is sold.");
    console.log(`Profit: ${total} leva.`);

} else {
    console.log(`Profit: ${total} leva.`);
}






}
sale (["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])

