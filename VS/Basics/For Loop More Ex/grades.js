function grades (input) {
let index = 0;
let students = Number (input[index]);
index++;

let top = 0;
let lower = 0;
let lowest = 0;
let fail = 0;
let total = 0;

    for (let i = 0; i < students; i++) {
        let grade = Number (input[index]);
        total += grade
        if (grade >= 5) {
            top++;
        } else if (grade >= 4 && grade <= 4.99) {
            lower++;
        } else if (grade >= 3 && grade <= 3.99) {
            lowest++;
        } else if (grade > 0 && grade < 3) {
            fail++;
        }
        index++;
    }
let avrg = total / students

console.log(`Top students: ${((top/students)*100).toFixed(2)}%`);
console.log(`Between 4.00 and 4.99: ${((lower/students)*100).toFixed(2)}%`);
console.log(`Between 3.00 and 3.99: ${((lowest/students)*100).toFixed(2)}%`);
console.log(`Fail: ${((fail/students)*100).toFixed(2)}%`);
console.log(`Average: ${avrg.toFixed(2)}`);    





}
grades (["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"])