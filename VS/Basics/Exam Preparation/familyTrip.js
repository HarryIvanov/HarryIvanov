function trip (input) {
let budget = Number (input[0]);
let nights = Number (input[1]);
let pricePerNight = Number (input[2]);
let percent = Number (input[3]);

let total = (nights * pricePerNight) 
let pTotal = (budget * percent) / 100

if (nights > 7) {
    total *= 0.95
}
let all = total + pTotal
    
if (all <= budget) {
    let diff = budget - all
    console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
} else {
    let diff = all - budget
    console.log(`${diff.toFixed(2)} leva needed.`);
}




}
trip (["800.50", "8", "100", "2"])