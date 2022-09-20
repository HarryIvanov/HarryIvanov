function traveling (input) {
    let index = 0;
    let destination = input[index];
    index++
    let budget = Number (input[index]);
    index++
    let command = 0;
    let money = 0;
    let total = 0; 
    
      while (destination !== `End`) {
        while (money !== `End`) {
          money = Number (input[index]);
          total = total + money 
          
          if (total >=budget) {
            console.log (`Going to ${destination}!`)  
            break;
          }
          index++
      }
      index++
      destination = input[index];
      index++
      budget = Number (input[index]);
      index++
      total = 0;
      

    }
   
}       


traveling (["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])


