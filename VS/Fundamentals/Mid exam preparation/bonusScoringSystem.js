function bonusScoringSystem (input) {
    let students = Number (input[0]);
    let lectures = Number (input[1]);
    let additionalBonus = Number (input[2]);
    let attendace = 0;
    let maxBonus = 0;

    //

    for (let i = 3; i < input.length; i++) {
        let n = Number (input[i])
        if (n > attendace) {
            attendace = n
        }
        let x = ((attendace / lectures)* (5+ (additionalBonus)))
        if (x > maxBonus) {
            maxBonus = x
        }

    }
    maxBonus = Math.ceil(maxBonus)
    console.log(`Max Bonus: ${maxBonus}.`);
    console.log(`The student has attended ${attendace} lectures.`);

}
bonusScoringSystem ([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ]
  )