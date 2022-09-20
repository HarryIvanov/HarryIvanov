function trainers (input) {
    let counter = Number (input[0]);
    let index = 0;
    index++
    let name = input[index];
    index++
    let nameGrade = 0;
    let allGrades = 0;
    let presentations = 0;

    while (name !== `Finish`) {
        for (let i = 1; i <= counter; i++) {
            let grade = Number (input[index]);
            nameGrade = nameGrade + grade;
            allGrades = allGrades + grade;
            presentations++
            index++
            
        }
        if (name == `Finish`) {
            break;
        }
        nameGrade = nameGrade / counter
        console.log (`${name} - ${nameGrade.toFixed(2)}.`)
        nameGrade = 0;
        name = input [index];
        index++
    }
allGrades = allGrades / presentations
console.log (`Student's final assessment is ${allGrades.toFixed(2)}.`)
    
}
trainers (["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


