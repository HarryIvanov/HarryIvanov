function excursion (input) {

let ppl = Number (input[0]);
let nights = Number (input[1]);
let transportationCards = Number (input[2]);
let tickets = Number (input[3]);

let nightsPrice = nights * 20;
let transportPrice = transportationCards * 1.60;
let museumPrice = tickets * 6
let total = ((nightsPrice + transportPrice + museumPrice) * ppl) * 1.25

console.log(total.toFixed(2));



}
excursion (["20","14","30","6"])
