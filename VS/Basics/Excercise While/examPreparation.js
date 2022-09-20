function exam (input) {
    let index = 0;
    let countNegativeGrade = Number (input[index]);
    index++;
    let command = input[index];
    index++;
    let currentNegativeGrade = 0;
    let sumGrade = 0;
    let countProblems = 0;
    let lastOne = ""
    let isNeedBreak = false;
    


    while (command !== `Enough`) {
        let lastOne = command;
        let grade = Number (input[index]);
        index++;
        countProblems++;
        sumGrade +=grade;

        if (grade <= 4) {
            currentNegativeGrade++
        }
        if (currentNegativeGrade === countNegativeGrade) {
            console.log (`You need a break, ${countNegativeGrade} poor grades.`);
            isNeedBreak = true;
            break;
        }
        

        lastOne = command
        command = input [index];
        index++
    }
    if (!isNeedBreak) {
    let avg = sumGrade / countProblems
    console.log (`Average score: ${avg.toFixed(2)}`);
    console.log (`Number of problems: ${countProblems}`)
    console.log (`Last problem: ${lastOne}`)
    }
    

}
exam ([`2`,
`Income`,
`3`,
`Game Info`,
`6`,
`Best Player`,
`4`])

