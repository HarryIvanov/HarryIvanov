function race(input) {
    let racersArray = input.shift().split(", ")
    let racers = {}

    let patternName = /[A-Za-z]+/g
    let patternNumber = /[0-9]+/g

    let command = input.shift()

    while (command !== 'end of race') {
        let currentName = command.match(patternName).join("")
        let currentDistance = command.match(patternNumber).join("")
        let distance = 0;
        for (const el of currentDistance) {
            distance += Number(el)
        }
        if (racersArray.includes(currentName)) {

            if (racers.hasOwnProperty(currentName)) {

                racers[currentName] += distance

            } else {

                racers[currentName] = distance
            }
        }

        command = input.shift()
    }
    let filtered = Object.entries(racers).sort((a, b) => b[1] - a[1])
    for (let i = 0; i < 3; i++) {
        let [name, distance] = filtered[i];
        if (i == 0) {
            console.log(`1st place: ${name}`);
        } else if (i == 1) {
            console.log(`2nd place: ${name}`);
        } else if (i == 2) {
            console.log(`3rd place: ${name}`);
        }
    }
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
)