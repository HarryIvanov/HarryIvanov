function trip (input) {
let budget = Number (input[0]);
let nights = Number (input[1]);
let pricePerNight = Number (input[2]);
let additional = Number (input[3]);

let percent = (additional/100) * budget
if (nights > 7) {
    pricePerNight = pricePerNight * 0.95;
}

let total = (nights * pricePerNight) + percent;

if (total <= budget) {
let diff = budget - total;

console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);

} else {
let diff = total - budget;

console.log(`${diff.toFixed(2)} leva needed.`);

}




}
trip (["500",
"7",
"66",
"15"])

