 function lift (array) {
    let maxCapacity = 4
    let ppl = Number (array.shift())
    let counter = 0;
    let wagons = array.toString()
    let cabins =[]
    let final =[]
    let sum = 0;
        for (let i = 0; i < wagons.length; i++) {
            if (wagons[i] === " ") {
                continue;
            }
            counter++
            let el = Number (wagons[i])
            sum += el
            cabins.push(el)
        }
        let pplToJoin = (counter*maxCapacity)-sum
        
       
      
        if (pplToJoin < ppl) {
        let leftPpl= ppl - pplToJoin
        console.log(`There isn't enough space! ${leftPpl} people in a queue!`);
        cabins.toString()
        for (let i = 0; i < cabins.length; i++) {
            final.push(maxCapacity)
        }
        console.log(final.join(" "));
      } else if  (pplToJoin == ppl) {
        for (let i = 0; i < cabins.length; i++) {
            final.push(maxCapacity)
        }
        console.log(final.join(" "));
    }
      else {
        console.log('The lift has empty spots!');
        cabins.toString()
        for (let i = 0; i < cabins.length; i++) {
            let num = Number (cabins[i]) 
            if (ppl <= 0) {
                final.push(num)
            } else {
                let joining = maxCapacity - num
                    if (joining > ppl) {
                        final.push(ppl+num)
                        ppl =0;
                    } else {
                        
                        final.push(joining+num)
                        ppl -= joining
                    }
                    
            }

        }
        console.log(final.join(" "));
      }

 }
 lift ([
    "13",
    "0 2 2 0 "
   ])
   
   