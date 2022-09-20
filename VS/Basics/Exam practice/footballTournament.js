function tournament (input) {
let index = 0;
let team = input[index];
index++;
let games = Number (input[index]);
index++;
let points = 0;
let wins = 0;
let drafts = 0;
let losses = 0;

for (let i = 0; i < games; i++) {
    let comm = input[index];
    if (comm === `W`) {
        wins++;
        points += 3;
    } else if (comm === `D`) {
        drafts++;
        points += 1;
    } else if (comm === `L`) {
        losses++;
    }
    index++;
}
if (games === 0) {
    console.log(`${team} hasn't played any games during this season.`);
} else {
let wr = 100 / (games / wins)
console.log(`${team} has won ${points} points during this season.`);
console.log("Total stats:");
console.log(`## W: ${wins}`);
console.log(`## D: ${drafts}`);
console.log(`## L: ${losses}`);
console.log(`Win rate: ${wr.toFixed(2)}%`);
}



}
tournament (["Chelsea",
"0"])

