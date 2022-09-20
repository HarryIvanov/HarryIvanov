function coins(input) {
   
let num = Number (input[0]);
let money = Math.floor(num*100)
let counter = 0;

   while (money > 0) {
       if (money >= 200) {
           money = money - 200
           counter++
       } else if (money >= 100) {
           money = money - 100
           counter++
       } else if (money >= 50) {
        money = money - 50
        counter++
    } else if (money >= 20) {
        money = money - 20
        counter++
    } else if (money >= 10) {
        money = money - 10
        counter++
    } else if (money >= 5) {
        money = money - 5
        counter++
    } else if (money >= 2) {
        money = money - 2
        counter++
    } else if (money >= 1) {
        money = money - 1
        counter++
    }
   }
console.log (counter)
 
}
coins([`2.49`]);
