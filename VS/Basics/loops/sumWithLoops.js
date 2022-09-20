function demo (input){
    let digits = input [0];
    let sum = 0;
    for (i = 0; i < digits.length; i++){
    let digit = Number (digits [i]);
    sum = sum + digit;
    } 
    console.log (`The sum of the digits is:${sum}`);
} 
demo ([`1234`])