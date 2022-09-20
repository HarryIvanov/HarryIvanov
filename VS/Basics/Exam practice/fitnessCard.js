function fitness (input) {
    let money = Number (input[0]);
    let sex = input[1];
    let age = Number (input[2]);
    let type = input[3];
    let total =0;
    let diff =0;

    if (sex === `m`) {
        switch (type) {
            case `Gym` : total = 42 ; break ;
            case `Boxing` : total = 41 ; break ;
            case `Yoga` : total = 45 ; break ;
            case `Zumba` : total = 34 ; break ;
            case `Dances` : total = 51 ; break ;
            case `Pilates` : total = 39 ; break ;
            default : break ;
        } 
    } 
    if ( sex === `f`) {
        switch (type) {
            case `Gym` : total = 35 ; break ;
            case `Boxing` : total = 37 ; break ;
            case `Yoga` : total = 42 ; break ;
            case `Zumba` : total = 31 ; break ;
            case `Dances` : total = 53 ; break ;
            case `Pilates` : total = 37 ; break ;
            default : break ;
        }
    }
    if (age <= 19) {
        total = total * 0.80
    }
    if (total <= money) {
        console.log (`You purchased a 1 month pass for ${type}.`)
    } else {
        diff = total -money
        console.log (`You don't have enough money! You need $${diff.toFixed(2)} more.`)
    }



}
fitness(["10",
"m",
"50",
"Pilates"])



