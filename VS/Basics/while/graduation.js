function graduation(input) {
    let index = 0;
    let name = (input[index]);
    index++;
    let i = 1;
    let badGrade = 0;
    let sumGrade = 0;
    let isExcluded = false;


    while (i <= 12) {
        let grade = Number(input[index]);
        index++;
        if (grade < 4.00) {
            badGrade++

            if (badGrade > 1) {
                isExcluded = true;
                break;

            } console.log(`${name} has been excluded at ${i} grade`)
            continue;
        }
        sumGrade += grade;
        i++;
    }
    if (!isExcluded) {
        let averageGrade = sumGrade / 12
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    } else {

    }

}

graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])