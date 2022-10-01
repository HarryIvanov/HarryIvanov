function processOddNumbers (array) {
   let res = array
   res = res.filter((num,i) => i % 2 == 1);
  res = res.map(x => 2*x);
   res.reverse() 

    console.log(res.join(" "));
    
}

processOddNumbers ([10, 15, 20, 25])
processOddNumbers ([3, 0, 10, 4, 7, 3])