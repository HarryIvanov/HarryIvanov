let myArr = ['one', 'two', 'three', 'four']
let lengths = myArr.map(x => x.length)

console.log(lengths); // връща дължината на всеки елемент

let arrToNum = ['5', '4', '3', '2']
let nums = arrToNum.map(Number) 
console.log(nums); // връща в числа
let incr = nums.map(x => x+1)
console.log(incr); // връща елементите + 1

// не променя основния масив. Всичко отива в променливи или нов масив!!!!

let array = ['one', 'two', 'three', 'four']
let filtered = array.filter(x => x.length > 3)
console.log(filtered); // връща всички елементи, които са с length по-голям от 3.
let filtered2 = arrToNum.filter(x => Number (x) > 3)
console.log(filtered2); // връща всички елементи, които са по-големи от 3.

// не променя основния масив. Всичко отива в променливи или нов масив!!!!

