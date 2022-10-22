function pig (array) {
    let foodInGrams = Number (array[0]) * 1000;
    let hayInGrams = Number (array[1]) * 1000;
    let qtyCoverInGrams = Number (array[2]) * 1000;
    let pigsWeightInGrams = Number (array[3]) * 1000;
    let gone = true;
    
    for (let i = 1; i <= 30; i++) {
        
        foodInGrams -= 300;
        if (i % 2 == 0) {
            hayInGrams -= (foodInGrams * 0.5) / 10;
        }
        if (i % 3 == 0) {
            qtyCoverInGrams -= (pigsWeightInGrams / 3);
        }
        if (foodInGrams <= 0 || hayInGrams <= 0 || qtyCoverInGrams <= 0) {
            gone = false;
            break;
        }
    }
        if (gone) {
            foodInGrams = foodInGrams / 1000;
            hayInGrams = hayInGrams / 1000;
            qtyCoverInGrams = qtyCoverInGrams / 1000;
            pigsWeightInGrams = pigsWeightInGrams / 1000;
            console.log(`Everything is fine! Puppy is happy! Food: ${foodInGrams.toFixed(2)}, Hay: ${hayInGrams.toFixed(2)}, Cover: ${qtyCoverInGrams.toFixed(2)}.`);
        } else {
            console.log("Merry must go to the pet store!");
        }

}
pig (["10", 
"5", 
"3", 
"1"])


