function care (input) {
    let index = 0;
    let food = Number (input[index]) * 1000;
    index++
    let totalFood = Number (input[index]);
    index++
    let count = 0;
    let total  = 0;
    
   while (count !== `Adopted`){
   total = total + totalFood
    count = input[index];
   totalFood = Number (input[index]);
   index++;
   }
    
    if (total <= food) {
        let diff = food - total
        console.log (`Food is enough! Leftovers: ${diff} grams.`)
    } else if ( total > food) {
        diff = total - food 
        console.log (`Food is not enough. You need ${diff} grams more.`)
    }

    
}
care (["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])


