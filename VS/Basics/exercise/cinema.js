function cinema (input) {
    let r = Number (input[1]);
    let c = Number (input [2]);
    let type = input [0];
    let income = 0;

    if (type == `Premiere`) {
        income = r * c * 12;
    } else if (type == `Normal`) {
        income = r * c * 7.50
    } else if (type == `Discount`) {
        income = r * c * 5;
    }
    console.log (`${income.toFixed(2)}`)
}
cinema (["Premiere",
"10",
"12"])
