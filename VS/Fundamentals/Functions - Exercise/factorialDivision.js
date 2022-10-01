function factorialDivision (n1, n2) {
    function calculation (number){
    let res = 1
    
    while (number != 1) {
        res *= number;
        number -= 1;
    }
    return res;
}
    let finalRes = calculation(n1) / calculation(n2)
    console.log(finalRes.toFixed(2))
   
}
factorialDivision (5, 2)