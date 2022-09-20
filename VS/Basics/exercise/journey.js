function journey (input) {
    let budget = Number (input[0]);
    let season = input[1];
    let destination = 0;
    let camp = 0;
    let totalCost = 0;
    let cost = 0;

    if (budget <= 100 && budget <= 999) {
        switch (season) {
            case `summer` : cost = budget * 0.70 ; break ;
            case `winter` : cost = budget * 0.30 ; break ;
            default : break ;
        } destination = `Bulgaria`;
    } else if (budget <= 1000) {
        switch (season) {
            case `summer` : cost = budget * 0.60 ; break ;
            case `winter` : cost = budget * 0.20 ; break ;
            default : break ;
        } destination = `Balkans`
    } else if (budget > 1000) {
            cost = budget * 0.10;
            destination = `Europe`;
        } 
    if (destination == `Europe` || season == `winter`) {
        camp = `Hotel` ;
    } else {
        camp = `Camp`;
    }
        totalCost = budget - cost
        console.log (`Somewhere in ${destination}`)
        console.log (`${camp} - ${totalCost.toFixed(2)}`)
    }    
 
 journey (["1500", "summer"])



