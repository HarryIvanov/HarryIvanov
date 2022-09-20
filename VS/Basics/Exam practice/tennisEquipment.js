function equipment (input) {
let rocketPrice = Number (input[0]);
let rockets = Number (input[1]);
let sneakers = Number (input[2]);

let sneakersPrice = rocketPrice / 6

let total = (rocketPrice * rockets) + (sneakersPrice * sneakers)
let otherEquipment = total * 0.2

let all = total + otherEquipment

let djokovic = all / 8
let sponsors = all * 7 / 8

console.log (`Price to be paid by Djokovic ${Math.floor (djokovic)}`)
console.log (`Price to be paid by sponsors ${Math.ceil (sponsors)}`)




}
equipment ([`850`, `4`, `2`])