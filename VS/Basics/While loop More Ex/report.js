function report (input) {
let index = 0;
let target = Number (input[index]);
index++;
let command = input[index];



let cash = 0;
let cs = 0;
let cc = 0;
let totalMoney = 0;
let cashMoney = 0;
let debitMoney = 0;


    while (command !== "End") {
        let money = Number (input[index]);
        cash++;
        if (cash % 2 === 1) {
            if (money <= 0 || money > 100) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                totalMoney += money;
                cashMoney += money;
                cs++;
            }
        } else if (cash % 2 === 0) {
            if (money < 10) {
                console.log("Error in transaction!");
            } else {
                console.log("Product sold!");
                totalMoney += money;
                debitMoney += money;
                cc++;
            }
        } if (totalMoney >= target) {
            break;
        }
        index++;
        command = input[index];
        
    }    
    if (totalMoney < target) {
        console.log("Failed to collect required money for charity.");
    } else if (totalMoney >= target) {
        let avcs = cashMoney / cs;
        let avcc = debitMoney / cc;
        
        console.log(`Average CS: ${avcs.toFixed(2)}`);
        console.log(`Average CC: ${avcc.toFixed(2)}`);
    }
}
report  (["500", "120", "8", "63", "256", "78", "317"])