function pets (input) {
let index = 0;
let days = Number (input[index]);
index++;
let totalFood = Number (input[index]);
index++;
let dog = 0;
let cat = 0;
let biscuits = 0;
let totalDog = 0;
let totalCat = 0;


for (let i = 1; i <= days; i++) {
    let total = 0;
    dog = Number (input[index]);
    totalDog += dog
    index++;
    cat = Number (input[index]);
    totalCat += cat
    index++;
    total = cat + dog
    if (i % 3 === 0) {
        biscuits += (total * 0.10)
    }
}

let pFood = (totalCat + totalDog) / totalFood * 100
let pDog = totalDog / (totalCat + totalDog) * 100
let pCat = totalCat / (totalCat + totalDog) * 100

console.log(`Total eaten biscuits: ${biscuits.toFixed(0)}gr.`);
console.log(`${pFood.toFixed(2)}% of the food has been eaten.`);
console.log(`${pDog.toFixed(2)}% eaten from the dog.`);
console.log(`${pCat.toFixed(2)}% eaten from the cat.`);


}
pets (["3", "1000", "300", "20", "100", "30", "110", "40"])