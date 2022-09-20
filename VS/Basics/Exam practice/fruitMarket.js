function market (input) {
let strawberries = Number (input[0]);
let bananasKg = Number (input[1]);
let orangesKg = Number (input[2]);
let berriesKg = Number (input[3]);
let strawKg = Number (input[4]);

let berries = strawberries / 2;
let oranges = berries * 0.60;
let bananas = berries * 0.20;

let total = (strawKg * strawberries) + (bananas * bananasKg) + (oranges * orangesKg) + (berries * berriesKg);

console.log(`${total.toFixed(2)}`);



}
market ([`48`, `10`, `3.3`, `6.5`,`1.7`])