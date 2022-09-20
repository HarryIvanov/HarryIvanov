function bills (input) {
let index = 0;
let months = Number (input[index]);
index++;

let water = months * 20;
let internet = months * 15;
let total = 0;

for (let i = 0; i < months; i++) {
    let m = Number (input[index]);
    total += m;
    index++
}


console.log(`Electricity: ${total.toFixed(2)} lv`);
console.log(`Water: ${water.toFixed(2)} lv`);
console.log(`Internet: ${internet.toFixed(2)} lv`);
console.log(`Other: ${((total + water + internet)*1.20).toFixed(2)} lv`);
console.log(`Average: ${((total + water + internet + ((total + water + internet)*1.20)) / months).toFixed(2)} lv`);



}
bills (["5", "68.63", "89.25", "132.53", "93.53", "63.22"])