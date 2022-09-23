function maxNumber (array) {
    let numbers = []
    let num = 0;
    let check = 0;

for (let i = 0; i < array.length; i++) {
   num = array[i];
   if (num <= array[i+1]) {
    continue;
   } else {
    numbers.push(num)
   }
for (let x = numbers.length-1; x > 0; x--) {
    if (numbers[x] > numbers [x-1]) {
        numbers =[];
        numbers.push(numbers[x])
    }
}
}
console.log(numbers.join(" "));





}
    

maxNumber ([27, 19, 42, 2, 13, 45, 48])