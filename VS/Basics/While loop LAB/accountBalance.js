function acc (input) {
    let index = 0;
    let sum = input[index];
    let n = Number (input[index]);
    index++;
    let total = 0;

    while (sum !== `NoMoreMoney`) {
        if (n < 0 ){
            console.log (`Invalid operation!`);
            break;
        }
        total = total + n;
        console.log (`Increase: ${n.toFixed(2)}`);
        sum = (input[index]);
        n = Number (input[index]);
        index++
    }
    console.log (`Total: ${total.toFixed(2)}`)
}
acc (["120",
"45.55",
"-150"])

