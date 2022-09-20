function accBalance (input) {
let index = 0;
let acc = input [index];
index++
sum = 0;
while (acc !== "NoMoreMoney") {
    let money = Number (acc);
    
    if(money < 0) {
        console.log (`Invalid operation!`)
        break;
        }
        sum += money;
        console.log (`Increase: ${money.toFixed(2)}`);
        acc = input [index];
        index++
     
     
    } console.log (`Total: ${sum.toFixed(2)}`)
}
accBalance (["120",
"45.55",
"-150"])