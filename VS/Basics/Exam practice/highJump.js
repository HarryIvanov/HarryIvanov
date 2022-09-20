function jump (input) {
let index = 0;
let start = Number (input[index]);
let starting = start - 30;
index++;
let jump = 0
let unsuccess = 0
let success = true;
let jumps = 0;
let currentJump = 0;


for (let i = 1; i < input.length; i++) {
    jumps++
    jump = Number (input[index]);
    currentJump = starting
    
    
    if (jump > starting) {
        starting += 5;
        unsuccess = 0;
    } else {
        unsuccess++;
    } 
    if (unsuccess == 3) {
        success = false;
        break;
    }

    index++
    
}
if (!success) {
    console.log (`Tihomir failed at ${starting}cm after ${jumps} jumps.`)
} else {
    console.log(`Tihomir succeeded, he jumped over ${currentJump}cm after ${jumps} jumps.`);
}



}
jump (["231",
"205",
"212",
"213",
"228",
"229",
"230",
"235"])


