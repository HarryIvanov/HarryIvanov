function ticket (input) {
    let day = input [0];
    let price = 0;

    switch (day) {
        case `Monday`: 
        case `Tuesday`: price = 12 ; break ;
        case `Wednesday`:
        case `Thursday`: price = 14 ; break ;
        case `Friday`: price = 12 ; break ;
        case `Saturday`: price = 16 ; break ;
        case `Sunday`: price = 16 ; break ;
        default : break ;
    }
    console.log (price)
}
ticket ([`Sunday`])