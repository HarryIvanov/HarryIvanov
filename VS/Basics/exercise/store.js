function store (input){
let city = input [1];
let product = input [0];
let num = Number (input[2]);
let sum = 0;
if (city == `Sofia`) {
    switch (product) {
        case `coffee` : sum =  num * 0.50 ; break ;
        case `water` : sum = num * 0.80 ; break ;
        case `beer` : sum = num * 1.20 ; break ;
        case `sweets` : sum = num * 1.45 ; break ;
        case `peanuts` : sum = num * 1.60 ; break ;
        
        } 
    }   else if (city == `Plovdiv`) {
    switch (product) {
        case `coffee` : sum =  num * 0.40 ; break ;
        case `water` : sum = num * 0.70 ; break ;
        case `beer` : sum = num * 1.15 ; break ;
        case `sweets` : sum = num * 1.30 ; break ;
        case `peanuts` : sum = num * 1.50 ; break ;
        }
    }   
     else if (city == `Varna`) {
    switch (product) {
        case `coffee` : sum =  num * 0.45 ; break ;
        case `water` : sum = num * 0.70 ; break ;
        case `beer` : sum = num * 1.10 ; break ;
        case `sweets` : sum = num * 1.35 ; break ;
        case `peanuts` : sum = num * 1.55 ; break ;
    } 
} console.log (sum.toFixed(2))
}


store (["peanuts",
"Plovdiv",
"1"])