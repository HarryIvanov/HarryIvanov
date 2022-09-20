function stream (input) {
let index = 0;
let command = input[index];
index++;
let letter = ""
let c = 0;
let n = 0;
let o = 0;
let secretLetters = 0;

while (command !== "End") {
    if (command === "c") {
        if (c === 0) {
            c++;
            command = input[index];
            index++;
            continue;
        } 
    }
    if (command === "n") {
        if (n === 0) {
            n++;
            command = input[index];
            index++;
            continue;
        } 
    }
    if (command === "o") {
        if (o === 0) {
            o++;
            command = input[index];
            index++;
            continue;
        } 
    } 
    if (c === 1 && o === 1 && n === 1) {
        letter = `${letter} ${command}`;
        n = 0;
        c = 0;
        o = 0;
        command = input[index];
        index++;
        continue;
    } 
    
    letter += `${command}`;
    command = input[index];
    index++;
    



}
console.log(`${letter}`);



}
stream (["H","n","e","l","l","o","o","c","t","c","h","o","e","r","e","n","e","End"])