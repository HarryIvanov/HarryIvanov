function shop (input) {
    let index = 0;
    let startingEgss = Number (input[index]);
    index++
    let command = input[index];
    let eggs = 0;
    let NO = false;
    let sold = 0;

    while (command !== `Close`) {
        index++
        eggs = Number (input[index]);
        if (command == `Buy`) {
            if (startingEgss < eggs) {
                NO = true;
                break;
            } else {
            startingEgss = startingEgss - eggs
            sold = eggs + sold
            }
        } else if (command == `Fill`) {
            startingEgss = startingEgss + eggs
        }
        index++;
        command = input[index];
    }
if (!NO) {
    console.log (`Store is closed!`)
    console.log (`${sold} eggs sold.`)
} else {
    console.log (`Not enough eggs in store!`)
    console.log (`You can buy only ${startingEgss}.`)
}



}
shop (["20",
"Fill",
"30",
"Buy",
"15",
"Buy",
"20",
"Close"])

