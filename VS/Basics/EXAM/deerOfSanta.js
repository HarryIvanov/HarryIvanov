function santa (input) {
let daysGone = Number (input[0]);
let foodInKG = Number (input[1]);
let foodForFirst = Number (input[2]);
let foodForSecond = Number (input[3]);
let foodForThird = Number (input[4]);


let totalFood = daysGone * (foodForFirst + foodForSecond + foodForThird)

if (totalFood <= foodInKG) {
    let diff = foodInKG - totalFood
    console.log(`${Math.floor(diff)} kilos of food left.`);
} else {
    let diff = totalFood - foodInKG
    console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
}


}
santa (["5",
"10",
"2.1",
"0.8",
"11"])

