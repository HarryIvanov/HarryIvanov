function shootForTheWin (input) {
    let targets = input[0].split(' ').map(el => Number(el));
    input.shift();
    let shots = 0;
    
    let index = 0;
   let command = input[index].toString();
    
    
        while (command !== 'End') {
            let tar = Number (input[index]);
            
            if (tar >= Number (targets.length)) {
                index++;
                command = input[index].toString();
                continue;
            } else {
                if (Number (targets[tar]) == -1) {
                index++;
                command = input[index].toString();
                continue;
                } else {
                    let num = targets[tar]
                    targets[tar] = -1
                    shots++;
                    for (let i = 0; i < targets.length; i++) {
                        if (targets[i] == -1) {
                            continue;
                        }
                        if (targets[i] > num) {
                            let num2 = Number (targets[i])
                            targets[i] = num2 - num
                        } else {
                            let num2 = Number (targets[i])
                            targets[i] = num2 + num
                        }
                    }
                }
            }
            index++
            command = input[index].toString();
        }
    console.log(`Shot targets: ${shots} -> ${targets.join(" ")}`);
    
}
shootForTheWin (["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])

