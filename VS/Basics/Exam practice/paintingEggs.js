function painting (input) {
    let size = input[0];
    let color = input[1];
    let order = Number (input[2]);
    let total = 0;

    if (size == `Large`) {
        switch (color) {
            case `Red`: total = order * 16 ; break ;
            case `Green`: total = order * 12 ; break ;
            case `Yellow`:total = order * 9 ; break ;
        }
    } else if (size == `Medium`) {
        switch (color) {
            case `Red`: total = order * 13 ; break ;
            case `Green`: total = order * 9 ; break ;
            case `Yellow`:total = order * 7 ; break ;
        }
    } else if (size == `Small`) {
        switch (color) {
            case `Red`: total = order * 9 ; break ;
            case `Green`: total = order * 8 ; break ;
            case `Yellow`:total = order * 5 ; break ;
        }
    } 
    total = total * 0.65
console.log (`${total.toFixed(2)} leva.`)



}
painting (["Large",
"Red",
"7"])
