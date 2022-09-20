function tourney (input) {
let index = 0;
let capacity = Number (input[index]);
index++;
let fans = Number (input[index]);
let command = fans;
index++;

let a = 0;
let b = 0;
let v = 0;
let g = 0;
    for (let i = 0; i <= fans; i++) {
        if (command === "A") {
            a++;
        } else if (command === "B") {
            b++;
        } else if (command === "V") {
            v++;
        } else if (command === "G") {
            g++;
        }
        command = input[index];
        index++
    }
    console.log(`${((a/fans)*100).toFixed(2)}%`);
    console.log(`${((b/fans)*100).toFixed(2)}%`);
    console.log(`${((v/fans)*100).toFixed(2)}%`);
    console.log(`${((g/fans)*100).toFixed(2)}%`);
    console.log(`${((fans/capacity)*100).toFixed(2)}%`);

} 
tourney (["76","10","A","V","V","V","G","B","A","V","B","B",])