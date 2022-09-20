function vacation (input) {
let index = 0;
let moneyNeeded = Number (input[index]);
index++;
let money = Number (input[index]);
index++;
let spentDays = 0;
let days = 0;
let moneyGot = false;




while (moneyNeeded > money) {
    let type = input [index];
    index++;
    let tempMoney = Number (input[index]);
    index++;
    days++;
    if (type == `save`) {
       money += tempMoney;
       spentDays = 0;
    } else {
        money -=tempMoney;
        spentDays++;
        if (money < 0) {
            money = 0;
        }
        if (spentDays === 5) {
            console.log (`You can't save the money.`);
            console.log (days);
            moneyGot = true;
            break;
        }

    }
}
if (!moneyGot) {
    console.log (`You saved the money for ${days} days.`);
    }





} 

vacation (["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
