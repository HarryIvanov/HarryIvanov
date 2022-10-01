let names = ['Peter',' Mary', 'George','Stephen']
names.sort()
console.log(names); // може да преправя масива и го връща в последователност

let nums = [1, 8, 20, 40, 4, 2, 3] 
nums.sort((a,b) => a - b)
console.log(nums); // ако не заложим функция в сорт, той ще се счупи, защото ако имаме 20 и 2 той хваща само 2 и чупи формулата.
// работи с ASCII таблица.

let newNames = ['Peter',' mary', 'george','Stephen']
newNames.sort((a,b) => a.localeCompare(b))
console.log(newNames); // няма да се съобрази дали е с малка или голяма буква. (ползва ASCII таблица)