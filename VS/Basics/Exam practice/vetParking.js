function parking (input) {

let index = 0;    
let days = Number (input[index]);
index++;
let hours = Number (input[index]);
index++
let tax = 0;
let total = 0;
let dayTax = 0;

    for (let i = 1; i <= days; i++) {

        for (let y = 1; y <= hours; y++) {
            if (i % 2 === 0 && y % 2 === 1) {
                tax = 2.50;
                total += tax;
                dayTax += tax;
            } else if (i % 2 === 1 && y % 2 === 0) {
                tax = 1.25;
                total += tax;
                dayTax += tax;
            } else {
                tax = 1;
                total += tax;
                dayTax += tax;
            }
        }
        console.log (`Day: ${i} - ${dayTax.toFixed(2)} leva`);
        dayTax = 0;
    }
    console.log (`Total: ${total.toFixed(2)} leva`)

}
parking ([`5`, `2`])