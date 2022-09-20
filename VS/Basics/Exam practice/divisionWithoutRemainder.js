function remainder (input) {
let index = 0;
let n = Number (input[index]);
index++; 
let h = Number (input[index]);
index++;
let p1 = 0;
let p2 = 0;
let p3 = 0;
let p4 = ``


    for (let i = 0; i <= input.length-1; i++) {
        
        if (h % 2 === 0) {
            p1++;
            
        } 
        if (h % 3 === 0) {
            p2++;
        } 
        if (h % 4 === 0) {
            p3++
        }
        
        h = Number (input[index]);
        index++

    }
let p1Prc = p1 / n * 100;
let p2Prc = p2 / n * 100;
let p3Prc = p3 / n * 100;
console.log(`${p1Prc.toFixed(2)}%`);
console.log(`${p2Prc.toFixed(2)}%`);
console.log(`${p3Prc.toFixed(2)}%`);

}
remainder (["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])


