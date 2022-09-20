function graduation (input) {
let index = 0;
let name = input[index];
index++;
let grade = 0;
let num = 0;
let counter = 0;
isExcluded = true;
let average = 0;

while (grade < 12) {
    num = Number (input[index]);
    if (num < 4) {
        counter++
    }
    if (counter == 2) {
        isExcluded = false;
        break;
    }
    average = average + num
    index++
    grade++
}
if (!isExcluded) {
    console.log (`${name} has been excluded at ${grade} grade`)
} else {
console.log (`${name} graduated. Average grade: ${(average / 12).toFixed(2)}`)
}
}
graduation
(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

