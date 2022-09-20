function hospital (input) {
let index = 0;
let period = Number (input[index]);
index++

let treated = 0;
let untreated = 0;
let doctors = 7;

    for (let i = 1; i <= period; i++) {
        let patients = Number (input[index]);
        if (i % 3 === 0) {
            if (untreated > treated) {
            doctors++
            }
        }    
        if (patients <= doctors) {
            treated += patients
        } else {
            let diff = patients - doctors;
            untreated += diff;
            treated += doctors;
        } 
        index++;

    }
console.log(`Treated patients: ${treated}.`);
console.log(`Untreated patients: ${untreated}.`);    


}
hospital (["4", "7", "27", "9", "1"])