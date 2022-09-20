function bake (input) {
let index = 0;
let bread = Number (input[0]);
index++
let totalSugar = 0;
let totalFlour = 0;
//zahar 950
//brashno 750
let maxFlour = 0;
let maxSugar = 0;
let command = 0;
let sugarUsed = 0;
let flourUsed = 0;

    while (command < bread) {
        totalSugar = Number (input[index]);
        sugarUsed = sugarUsed + totalSugar
        if (totalSugar > maxSugar) {
            maxSugar = totalSugar
        }
        index++
        totalFlour = Number (input[index]);
        flourUsed = flourUsed + totalFlour
        if (totalFlour > maxFlour) {
            maxFlour = totalFlour
        }
        index++
        command++
    }
sugarUsed = sugarUsed / 950
flourUsed = flourUsed / 750
console.log (`Sugar: ${Math.ceil(sugarUsed)}`)
console.log (`Flour: ${Math.ceil(flourUsed)}`)
console.log (`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`)



}
bake (["4",
"500",
"350",
"560",
"430",
"600",
"345",
"578",
"543"])

