let text = "Harry"
let newText = " Ivanov"
let result = text.padEnd(text.length + newText.length, newText) 
/*Залагаме колко символа искаме да стане текста и 
след това какво искаме да долепим до края*/
console.log(result);
let text2 = "Harry"
let newText2 = "Hello "
let result2 = text.padStart(text2.length + newText2.length, newText2);
/*Залагаме колко символа искаме да се добавят преди текста и 
след това какво искаме да добавим*/

console.log(result2);
