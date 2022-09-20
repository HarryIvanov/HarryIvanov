function food (input) {
let days = Number (input[0]);
let totalFood = Number (input[1]);
let grams = days * totalFood;
let index = 2;
let eatenByDog = 0;
let eatenByCat = 0;
let totalFoodEaten = 0;
let dayCounter = 1;
let dog =0;
let cat =0;
let totForTheDay = 0;
let totdog = 0;
let totcat = 0;
let biscuits = 0;

while (dayCounter <= days) {
    
    eatenByDog = Number (input[index]);
    dog = dog + eatenByDog
    index++
    
    eatenByCat = Number (input[index]);
    cat = cat + eatenByCat
    totForTheDay = eatenByCat + eatenByDog
    index++
    
    if (dayCounter % 3 === 0) {
        biscuits = biscuits + totForTheDay * 0.10
    }
    dayCounter += 1
}
totalFoodEaten =  (dog + cat)  / totalFood * 100
totdog = dog / (dog + cat) * 100
totcat = cat / (dog + cat) * 100

console.log (`Total eaten biscuits: ${Math.round(biscuits)}gr.`)
console.log (`${totalFoodEaten.toFixed(2)}% of the food has been eaten.`)
console.log (`${totdog.toFixed(2)}% eaten from the dog.`)
console.log (`${totcat.toFixed(2)}% eaten from the cat.`)






}
food (["3",
"1000",
"300",
"20",
"100",
"30",
"110",
"40"])
