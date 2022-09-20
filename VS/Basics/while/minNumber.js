function minNumber(input) {
    let index = 0;
    let number = input[index];
    index++;
    let minNum = Number.MAX_SAFE_INTEGER;

    while (number !== `Stop`) {
        let n = Number(number);
        if (minNum > n) {
            minNum = n
        }
        number = input[index];
        index++;

    } console.log(minNum)
}
minNumber (["100",
"99",
"80",
"70",
"Stop"])