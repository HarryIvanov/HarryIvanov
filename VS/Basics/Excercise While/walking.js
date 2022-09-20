function walking (input) {
    let goal = 10000
    let index = 0;
    let steps = 0;
    let allSteps = 0;
    let check = 0;
    let home = true;
    let done = true;

    while (index <= input.length) {
        if (allSteps >= goal) {
            done = false;
            break;
        }
        check = input[index];
        if (check == `Going home`){
            home = false;
            index++
            steps = Number (input[index]);
            allSteps = allSteps + steps;
            break;
        }
        steps = Number (input[index]);
        allSteps = allSteps + steps;
        index++
    }
    if (!done) {
        let diff = 0;
        diff = allSteps - goal
        console.log (`Goal reached! Good job!`)
        console.log (`${diff} steps over the goal!`)
    }
    if (!home) {
        let diff = 0;
        if (allSteps >= goal) {
        diff = allSteps - goal
        console.log (`Goal reached! Good job!`)
        console.log (`${diff} steps over the goal!`)
        } else {
        diff = goal - allSteps
        console.log (`${diff} more steps to reach goal.`)
        }
    }
}


walking (["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])

