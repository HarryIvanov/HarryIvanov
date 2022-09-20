function bags (input) {
let index = 0;
let capacity = Number (input[0]);
index++
let total = 0;
let counter = 0;
let bags = 0;
let i = input[index];
counter = Number (input[index]);
index++
let load = false;



    while (i !== `End`) {
        total = total + counter;
        if (total >= capacity) {
            load = true;
            break;
        }
        bags++;
        if (bags === 3) {
            counter = counter + counter * 0.10
        }
        
        i = input[index];
        counter = Number (input[index]);
        index++
    }
if (!load) {
    console.log (`Congratulations! All suitcases are loaded!`)
    console.log (`Statistic: ${bags} suitcases loaded.`)
} else {
    console.log (`No more space!`)
    console.log (`Statistic: ${bags} suitcases loaded.`)
}

}
bags (["1200.2",
"260",
"380.5",
"125.6",
"305",
"End"])



