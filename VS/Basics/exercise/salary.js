function salary (input) {
    let tabs = Number (input[0]);
    let salary = Number (input[1]);
    let index = 0;
    let site = input [index];
    index++
    let fcounter = 0;
    let icounter = 0;
    let rcounter = 0;
    total = 0;
    total1 = 0;


    for (let i = 0; i <= tabs; i++) {
        site = input [index];
        index++;
        if (site == `Facebook`) {
            fcounter += 1;
        } else if (site == `Instagram` ) {
            icounter += 1;
        } else if (site == `Reddit`) {
            rcounter += 1;
        } 
} total = salary - (fcounter * 150 + icounter * 100 + rcounter * 50)

if (total <= 0) {
    console.log (`You have lost your salary.`)
} else {
    console.log (Math.abs(total))
}





}
salary (["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])