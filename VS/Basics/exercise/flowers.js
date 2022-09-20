function flowers(input) {
    let type = input[0];
    let num = Number(input[1]);
    let budget = Number(input[2]);
    let sum = 0;
    let total = 0;

    switch (type) {
        case `Roses`: sum = num * 5 ; break ;
        case `Dahlias`: sum = num * 3.80 ; break ;
        case `Tulips`: sum = num * 2.80 ; break ;
        case `Narcissus`: sum = num * 3 ; break ;
        case `Gladiolus`: sum = num * 2.50 ; break ;
        default : break ;
       } if (type == `Roses` && num > 80) {
        sum = (sum * 0.90)
    } else if (type == `Dahlias` && num > 90) {
        sum = (sum * 0.85)
    } else if (type == `Tulips` && num > 80) {
        sum = (sum * 0.85)
    } else if (type == `Narcissus` && num < 120) {
        sum = sum + (sum * 0.15) 
    } else if (type == `Gladiolus` && num < 80) {
        sum = sum + (sum * 0.20)
    }  
    
    if (sum > budget) {
       total = sum - budget;
       console.log (`Not enough money, you need ${total.toFixed(2)} leva more.`)
    } else if (sum <= budget) {
        total = budget - sum;
        console.log (`Hey, you have a great garden with ${num} ${type} and ${total.toFixed(2)} leva left.`)
   }
} 
flowers (["Roses",
"81",
"250"])

