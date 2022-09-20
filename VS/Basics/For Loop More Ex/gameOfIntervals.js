function intervals (input) {
let index = 0;
let loops = Number (input[index]);
index++;

let res = 0;
let zeroToNine = 0;
let tenPlus = 0;
let twentyPlus = 0;
let tirtyPlus = 0;
let fortyPlus = 0;
let invalid = 0;

for (let i = 0; i < loops; i++) {
    let n = Number (input[index]);
    if (n < 0 || n > 50) {
        res /= 2;
        invalid++;
    } else if ( n >= 0 && n < 10) {
        res = res + (n * 0.20);
        zeroToNine++;
    } else if (n >= 10 && n <=19) {
        res = res + (n * 0.30);
        tenPlus++;
    } else if (n >= 20 && n <=29) {
        res = res + (n * 0.40);
        twentyPlus++;
    } else if (n >= 30 && n <= 39) {
        res += 50;
        tirtyPlus++;
    } else if (n >= 40 && n <= 50) {
        res += 100;
        fortyPlus++;
    }
    index++;



}
console.log(res.toFixed(2));
console.log(`From 0 to 9: ${((zeroToNine/loops)*100).toFixed(2)}%`);
console.log(`From 10 to 19: ${((tenPlus/loops)*100).toFixed(2)}%`);
console.log(`From 20 to 29: ${((twentyPlus/loops)*100).toFixed(2)}%`);
console.log(`From 30 to 39: ${((tirtyPlus/loops)*100).toFixed(2)}%`);
console.log(`From 40 to 50: ${((fortyPlus/loops)*100).toFixed(2)}%`);
console.log(`Invalid numbers: ${((invalid/loops)*100).toFixed(2)}%`);



} 
intervals (["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"])