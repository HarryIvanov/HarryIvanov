function vacation (ppl, type, day) {
    let price = 0;

        if (type === 'Students') {
            switch (day) {
                case 'Friday' : price = ppl * 8.45 ; break ;
                case 'Saturday' : price = ppl * 9.80 ; break ;
                case 'Sunday' : price = ppl * 10.46 ; break ;
                default : break ;
            }
        } else if (type === 'Business') {
            if (ppl >=100) {
                ppl = ppl - 10
            }
            switch (day) {
                case 'Friday' : price = ppl * 10.90 ; break ;
                case 'Saturday' : price = ppl * 15.60 ; break ;
                case 'Sunday' : price = ppl * 16 ; break ;
                default : break ;
            }
        } else if (type === 'Regular') {
            switch (day) {
                case 'Friday' : price = ppl * 15 ; break ;
                case 'Saturday' : price = ppl * 20 ; break ;
                case 'Sunday' : price = ppl * 22.50 ; break ;
                default : break ;
            }
        }
         if (type === 'Students' && ppl >= 30) {
                 price = price *0.85
        } else if (type === 'Regular' && ppl >= 10 && ppl <= 20) {
             price = price * 0.95
         }
         console.log(`Total price: ${price.toFixed(2)}`);
        }

        
vacation (100,
    "Business",
    "Saturday"
    )