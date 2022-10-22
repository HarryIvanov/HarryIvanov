function movingTarget (input) {
    let targets = input.shift().split(" ").map(x => Number(x));
    let index = 0;
    let command = input[index];
    index++;

        while(command !== "End") {
            let [com, ind, power] = command.split(" ");
            ind = Number (ind);
            power = Number (power);
            if (com == "Shoot") {
                if (targets[ind]) {
                    targets[ind] -= power;
                    if (targets[ind] <= 0) {
                        targets.splice(ind, 1)
                    }
                } 
            } else if (com == "Add") {
                if (targets[ind]) {
                    targets.splice(ind, 0, power)
                } else {
                    console.log("Invalid placement!");
                }
            } else if (com == "Strike") {
                if (targets[ind]) {
                    let firstIndex = Math.max(0, ind - power);
                    let lastIndex = power * 2 + 1
                    if (targets[firstIndex] && targets[lastIndex]) {
                       
                        targets.splice(firstIndex, lastIndex)
                    } else {
                    console.log("Strike missed!");
                    }
                } else {
                    console.log("Strike missed!");
                }
            }



            command = input[index];
            index++;
        }
        console.log(targets.join("|"));
}
movingTarget (["1 2 3 4 5",
"Strike 1 1",
"End"])

