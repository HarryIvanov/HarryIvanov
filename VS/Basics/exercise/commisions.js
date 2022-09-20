function commisions (input) {
    let city = input [0];
    let com = Number (input[1]);
    let sum = 0;
    let check = true;

    if (com >= 0 && com <= 500) {
        switch (city) {
            case `Sofia` : sum = com * 0.05 ; break ;
            case `Varna` : sum = com * 0.045 ; break ;
            case `Plovdiv` : sum = com * 0.055 ; break ;
            default : check = false ; break ;            
        }
    } else if (com > 500 && com <= 1000) {
        switch (city) {
            case `Sofia` : sum = com * 0.07 ; break ;
            case `Varna` : sum = com * 0.075 ; break ;
            case `Plovdiv` : sum = com * 0.08 ; break ;
            default : check = false ; break ;            
        }
    } else if (com > 1000 && com <= 10000) {
        switch (city) {
            case `Sofia` : sum = com * 0.08 ; break ;
            case `Varna` : sum = com * 0.10 ; break ;
            case `Plovdiv` : sum = com * 0.12 ; break ;
            default : check = false ; break ;            
        }
    } else if (com > 10000) {
        switch (city) {
            case `Sofia` : sum = com * 0.12 ; break ;
            case `Varna` : sum = com * 0.13 ; break ;
            case `Plovdiv` : sum = com * 0.145 ; break ;
            default : check = false ; break ;            
        }
    } else {
        check = false;
    } if (check) {
        console.log (`${sum.toFixed(2)}`)
    } else {
        console.log (`error`)
    }


}  
commisions (["Plovdiv",
"499.99"])