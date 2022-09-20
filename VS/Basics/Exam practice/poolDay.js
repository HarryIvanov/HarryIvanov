function pool (input) {

let ppl = Number (input[0]);
let tax = Number (input[1]);
let pricePerSeat = Number (input[2]);
let pricePerUmbrella = Number (input[3]);


let seats = Math.ceil(ppl * 0.75);
let totalTax = ppl * tax;
let umbrellas = Math.ceil(ppl / 2);

let total = (seats * pricePerSeat) + totalTax + (umbrellas * pricePerUmbrella);

console.log(`${total.toFixed(2)} lv.`);




}
pool (["21","5.50","4.40","6.20"])
