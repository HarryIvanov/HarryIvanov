function destination (input) {
    let budget = Number (input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number (input[3]);

    let total = 0;

    if (season === `Winter`) {
        switch (destination) {
            case `Dubai` : total = (days * 45000) * 0.70 ; break ;
            case `Sofia` : total = (days * 17000) * 1.25 ; break ;
            case `London` : total = days * 24000 ; break ;
            default : break ;       
        }
    } else if (season === `Summer`) {
        switch (destination) {
            case `Dubai` : total = (days * 40000) * 0.70 ; break ;
            case `Sofia` : total = (days * 12500) * 1.25 ; break ;
            case `London` : total = days * 20250 ; break ;
            default : break ;       
        }
    }
    if (total <= budget) {
        let diff = budget - total;
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`);
    } else {
        let diff = total - budget;
        console.log(`The director needs ${diff.toFixed(2)} leva more!`);
    }






}
destination (["400000", "Sofia", "Winter", "20"])