function market (a, b, c, d, e) {
let strawberriesPrice = Number (a);
let bananasKg = Number (b);
let orangesKg = Number (c);
let berriesKg = Number (d);
let strawKg = Number (e);


let berriesPrice = strawberriesPrice / 2
let orangesPrice = berriesPrice * 0.60
let bananasPrice = berriesPrice * 0.20

let total = (strawKg * strawberriesPrice) + (orangesKg * orangesPrice) + (bananasKg * bananasPrice) + (berriesKg * berriesPrice);


console.log(total.toFixed(2));

}
market ()