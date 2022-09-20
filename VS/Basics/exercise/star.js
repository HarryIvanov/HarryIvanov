function star (input) {
    let movie = input[0];
    let place = input [1];
    let tickets = Number (input [2]);
    ticketPrice = 0;

    if (movie == `A Star Is Born`)  {
    switch (place) {
        case `normal`: ticketPrice = tickets * 7.50 ; break ;
        case `luxury`: ticketPrice = tickets * 10.50 ; break ;
        case `ultra luxury`: ticketPrice = tickets * 13.50 ; break ;
        default :
        
    } 
} else if (movie == `Bohemian Rhapsody`) {
    switch (place) {
        case `normal`: ticketPrice = tickets * 7.35 ; break ;
        case `luxury`: ticketPrice = tickets * 9.45 ; break ;
        case `ultra luxury`: ticketPrice = tickets * 12.75 ; break ;
        default :
        
    } 
} else if (movie == `Green Book`){
    switch (place) {
        case `normal`: ticketPrice = tickets * 8.15 ; break ;
        case `luxury`: ticketPrice = tickets * 10.25 ; break ;
        case `ultra luxury`: ticketPrice = tickets * 13.25 ; break ;
        default :
    }
} else if (movie == `The Favourite`) {
    switch (place) {
        case `normal`: ticketPrice = tickets * 8.75 ; break ;
        case `luxury`: ticketPrice = tickets * 11.55 ; break ;
        case `ultra luxury`: ticketPrice = tickets * 13.95 ; break ;
        default :
        
}

} console.log (`${movie} -> ${ticketPrice.toFixed(2)} lv.`)
}
star ([`Green Book`, 
`normal`,
`63`])