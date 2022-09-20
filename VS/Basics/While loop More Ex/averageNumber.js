function average (input) {
let index = 0;
let n = Number (input[index]);
index++;
let total = 0; 
let counter = 0;   
for (let i = 1; i <= n; i++) {
counter = Number (input[index]);
total += counter
index++;
}

console.log((total / n).toFixed(2));

} 
average (["4", "95", "23", "76", "23"])