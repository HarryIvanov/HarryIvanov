function meetings (input) {
    let result = {};

    for (const line of input) {
        let [day, name] = line.split(" ")
        
            if (result.hasOwnProperty(day)) {
                console.log(`Conflict on ${day}!`);
            } else {
                console.log(`Scheduled for ${day}`);
                result[day] = name;
            }
    }
    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}
meetings (['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
)