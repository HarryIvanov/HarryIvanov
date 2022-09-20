function hotel (input) {
    let month = input [0];
    let days = Number (input[1]);
    let studioPr = 0;
    let apartamentPr = 0;

    if (month == `May` || month == `October`) {
        studioPr = days * 50
        apartamentPr = days * 65
        if (days > 14) {
            studioPr = studioPr * 0.70
            apartamentPr = apartamentPr * 0.90
        } else if (days > 7) {
            studioPr = studioPr * 0.95
        }
    } else if (month == `June` || month == `September`) {
        studioPr = days * 75.20
        apartamentPr = days * 68.70
        if (days > 14) {
            studioPr = studioPr * 0.80
            apartamentPr = apartamentPr * 0.90
        }
    } else if (month == `July` || month == `August`) {
        studioPr = days * 76
        apartamentPr = days * 77
        if (days > 14) {
        apartamentPr = apartamentPr * 0.90
        }
    }
    console.log (`Apartment: ${apartamentPr.toFixed(2)} lv.`)
    console.log  (`Studio: ${studioPr.toFixed(2)} lv.`)
}
hotel (["May",
"3"])