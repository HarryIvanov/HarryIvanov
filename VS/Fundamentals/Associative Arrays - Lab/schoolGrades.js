function schoolGrades (input) {
    let result = new Map ();

        for (let line of input) {
            let readLine = line.split(" ")
            let name = readLine.shift()
            let grades = [];
            for (const num of readLine) {
                grades.push(num)
            }
            if (result.has(name)) {
                let oldGrades = result.get(name)
                for (const num of oldGrades) {
                    grades.push(num)
                }
                
                result.set(name, grades)
            } else {
                result.set(name, grades)
            }
        }
        let sorted = Array.from(result.entries()).sort(([keyA, valueA], [keyB, valueB]) =>{
            return keyA.localeCompare(keyB)
        });
            
        for (let [key, grades] of sorted) {
            let average = 0;
            let sum = 0;
            for (let i = 0; i < grades.length; i++) {
            sum += Number (grades[i])
           }
           average = sum / grades.length
           console.log(`${key}: ${average.toFixed(2)}`)
        }
} 
schoolGrades (['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']

)