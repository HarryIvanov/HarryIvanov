function snooker(input) {

    let stage = input[0];
    let ticketType = input[1];
    let tickets = Number(input[2]);
    let trophyPic = input[3];

    let ticketPrice = 0;



    switch (stage) {
        case `Quarter final`:
            if (ticketType == `Standard`) {
                ticketPrice = 55.50
            } else if (ticketType == `Premium`) {
                ticketPrice = 105.20
            } else {
                ticketPrice = 118.90
            } break;

        case `Semi final`:
            if (ticketType == `Standard`) {
                ticketPrice = 75.88
            } else if (ticketType == `Premium`) {
                ticketPrice = 125.22
            } else {
                ticketPrice = 300.40
            } break;
        case `Final`:
            if (ticketType == `Standard`) {
                ticketPrice = 110.10
            } else if (ticketType == `Premium`) {
                ticketPrice = 160.66
            } else {
                ticketPrice = 400
            } break;
        default: break;
    }
    let total = ticketPrice * tickets

    if (total > 4000) {
        total = total * 0.75
    } else if (total <= 4000 && total > 2500 && trophyPic === `Y`) {
        total = (total * 0.90) + (40 * tickets)
    } else if (total <= 4000 && total > 2500 && trophyPic === `N`) {
        total = (total * 0.90)
    } else if (total <= 2500 && trophyPic === `Y`) {
        total = total + (40 * tickets)
    }
console.log (total.toFixed(2))

}
snooker(["Quarter final",
"Standard",
"11",
"N"])


