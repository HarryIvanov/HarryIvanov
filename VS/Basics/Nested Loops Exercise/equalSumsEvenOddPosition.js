function sumPositions (input) {
let firstNum = Number (input[0]);
let secondNum = Number (input[1]);
let printLine = ""

    for (let n = firstNum; n <= secondNum; n++) {
        let current = "" + n;
        let oddSum = 0;
        let evenSum = 0;
        for (let y = 0; y < current.length; y++) {
            let currentDigit = Number (current.charAt(y));
            if (y % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (oddSum === evenSum) {
            printLine += `${n} `
        }
    }
console.log(printLine);



}
sumPositions (["100000",
"100050"])
