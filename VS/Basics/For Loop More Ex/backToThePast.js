function past (input) {

let money = Number (input[0]);
let year = Number (input[1]);


let age = 18;
let spending = 12000;
let total = 0;
let hasEnough = true;
let x = 0;

for (let i = 1800; i <= year; i++) {
    x = year - i
    if (i % 2 === 1) {
        total += spending + (age * 50)
    } else {
        total += spending
    }
    if (total > money) {
        hasEnough = false;
        break;
    }
    age++;
}
if (!hasEnough) {
    let diff = total - money + (x * spending)
    
    console.log(`He will need ${diff.toFixed(2)} dollars to survive.`);
} else {
    let diff = money - total
    console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`);
}


}
past (["100000.15", "1808"])