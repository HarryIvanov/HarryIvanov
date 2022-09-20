function checkNum(input) {
    let fruit = input[0];
    let day = input[1];
    let num = Number(input[2]);
    let price = 0;
    let check = false;

    if (day == `Monday` || day == `Tuesday` || day == `Wednesday` || day == `Thursday` || day == `Friday`) {
        switch (fruit) {
            case `banana`: price = num * 2.50; break;
            case `apple`: price = num * 1.20; break;
            case `orange`: price = num * 0.85; break;
            case `grapefruit`: price = num * 1.45; break;
            case `kiwi`: price = num * 2.70; break;
            case `pineapple`: price = num * 5.50; break;
            case `grapes`: price = num * 3.85; break;
            default: check = true; break;
        }
    } else if (day == `Saturday` || day == `Sunday`) {
        switch (fruit) {
            case `banana`: price = num * 2.70; break;
            case `apple`: price = num * 1.25; break;
            case `orange`: price = num * 0.90; break;
            case `grapefruit`: price = num * 1.60; break;
            case `kiwi`: price = num * 3; break;
            case `pineapple`: price = num * 5.60; break;
            case `grapes`: price = num * 4.20; break;
            default: check = true; break;
        }
    } else {
        check = true;
    }
    if (!check) {
        console.log(`${price.toFixed(2)}`)
    } else {
        console.log(`error`)
    }

}
checkNum(["apple",
    "workday",
    "2"])