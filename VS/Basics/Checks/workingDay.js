function workingDay (input){
    let data = input [0] ;
    switch (data) {
        case `Monday`: 
        case `Tuesday`:
        case `Wednesday`:
        case `Tursday`:
        case `Friday` : console.log (`Working Day!`) ; break ;
        case `Saturday` : 
        case `Sunday` : console.log (`Weekend!`) ; break ; 
        default : console.log (`not a day`) ; break ;
    }
}

workingDay ([`Su`])