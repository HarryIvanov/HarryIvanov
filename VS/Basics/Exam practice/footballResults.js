function football (input) {
let res1 = input[0];
let res2 = input[1];
let res3 = input[2];

let wins = 0;
let draws = 0;
let losses = 0;

if (res1.charAt (0) > res1.charAt (2)) {
    wins++
} else if (res1.charAt (0) < res1.charAt (2)) {
    losses++
} else {
    draws++
}

if (res2.charAt (0) > res2.charAt (2)) {
    wins++
} else if (res2.charAt (0) < res2.charAt (2)) {
    losses++
} else {
    draws++
}
if (res3.charAt (0) > res3.charAt (2)) {
    wins++
} else if (res3.charAt (0) < res3.charAt (2)) {
    losses++
} else {
    draws++
}

console.log (`Team won ${wins} games.`)
console.log (`Team lost ${losses} games.`)
console.log (`Drawn games: ${draws}`)
}
football (["4:2",
"0:3",
"1:0"])

