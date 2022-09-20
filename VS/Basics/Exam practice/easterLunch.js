function easter (input) {
let bread = Number (input[0]) * 3.20;
let eggs = Number (input[1]) * 4.35;
let eggBox = Number (input[1]) * 12
let allEggs = eggBox * 12;
let rab = Number (input[2]) * 5.40;
let dye = eggBox * 0.15
let total = bread + eggs + dye + rab
console.log (total.toFixed(2))
} 
easter (["3",
"2",
"3"])
