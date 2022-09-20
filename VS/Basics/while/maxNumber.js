function maxNumber(input) {
    let index = 0;
    let number = input[index];
    index++;
    let maxNum = Number.MIN_SAFE_INTEGER;

    while (number !== `Stop`) {
        let n = Number(number);
        if (maxNum < n) {
            maxNum = n
        }
        number = input[index];
        index++;

    } console.log(maxNum)
}
maxNumber(["-10",
"-20",
"-30",
"Stop"])
