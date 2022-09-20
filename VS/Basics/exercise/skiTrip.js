function ski (input) {
    let days = Number (input [0]) - 1;
    let type = input [1];
    let ev = input [2];
    let total = 0;

    if (type == `room for one person`) {
        total = days * 18
        if (ev == `positive`) {
            total = total + total * 0.25
        } else {
            total = total - total * 0.10
        }
    } else if (type == `apartment`) {
        total = days * 25
        if (days > 15) {
            total = total - total * 0.50
        } else if (days <= 15 && days >= 10) {
            total = total - total * 0.35
        } else if (days < 10) {
            total = total - total * 0.30
        }    if (ev == `positive`) {
            total = total + total * 0.25
        } else {
            total = total - total * 0.10
    } 
} else if (type == `president apartment`) {
    total = days * 35
    if (days > 15) {
        total = total - total * 0.20
    } else if (days <= 15 && days >= 10) {
        total = total - total * 0.15
    } else if (days < 10) {
        total = total - total * 0.10
    }    if (ev == `positive`) {
        total = total + total * 0.25
    } else {
        total = total - total * 0.10
}  
}
console.log (total.toFixed(2))
}

ski (["30",
"president apartment",
"negative"])