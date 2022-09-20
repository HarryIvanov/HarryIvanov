function numbers (input) {
let index = 0;
let number = Number (input[index]);
index++
let sum = 0;


while (sum < number) {
    let num = Number (input[index]);
    sum = sum + num;
    index++
} console.log (sum)




}
numbers (["20",
"1",
"2",
"3",
"4",
"5",
"6"])

