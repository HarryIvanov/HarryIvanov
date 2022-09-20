function shoping (input) {
let budget = Number (input [0]);
let videos = Number (input[1]);
let procesors = Number (input[2]);
let ram = Number (input[3]);
let videosPr = videos * 250
let procersorsPr = videosPr * procesors * 0.35
let ramPr = ram * videosPr * 0.10
let total = ramPr + videosPr + procersorsPr
let discount = 0;
let number = 0;

if (videos > procesors) {
    let discount = total - (total * 0.15)
    if (discount < budget) {
        let number = budget - discount
        console.log (`You have ${number.toFixed(2)} leva left!`)    
    } else if (discount > budget) {
        let number = discount - budget
        console.log (`Not enough money! You need ${number.toFixed(2)} leva more!`)
    }
} else {
    if (total <= budget) {
        let number = budget - total
        console.log (`You have ${number.toFixed(2)} leva left!`)    
    } else if (total > budget) {
        let number = total - budget
        console.log (`Not enough money! You need ${number.toFixed(2)} leva more!`) 
}
}


}
shoping (["2000",
"3",
"4",
"1"])