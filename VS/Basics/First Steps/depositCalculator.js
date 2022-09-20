function depositCalculator (input) {
    let deposited = Number (input[0]);
    let term = Number (input[1]);
    let interest = Number (input[2]);
    let sumInterest = interest / 100;
    let sum1 = deposited * sumInterest;
    let sum2 = sum1 / 12;
    let sum3 = deposited + term * sum2;
    console.log (sum3);
}
depositCalculator ([`2350`, `6`, `7`])