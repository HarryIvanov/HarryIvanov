function previousDay (year, month, day) {
    
   let result = new Date(year, month - 1, day - 1)
   let newYear = result.getFullYear();
   let newMonth = result.getMonth()+1;
   let newDay = result.getDate();


   
console.log(`${newYear}-${newMonth}-${newDay}`);
    
  
   

    
}
previousDay (2016, 1, 1)