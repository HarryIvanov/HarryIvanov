function calculator (num, operator, num2) {
    let sum = 0;
    switch (operator) {
        case '+' : sum = num + num2 ; break 
        case '-' : sum = num - num2 ; break 
        case '*' : sum = num * num2 ; break 
        case '/' : sum = num / num2 ; break 
        default : break
    }
    console.log(sum.toFixed(2));
}
calculator (5,'+',10)