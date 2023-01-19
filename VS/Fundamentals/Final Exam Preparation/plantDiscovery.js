function plantDiscovery (input) {
    let rotations = Number (input.shift())
    let plantation = {}

    for (let i = 0; i < rotations; i++) {
        let [plant, rare] = input.shift().split("<->");
        plantation[plant] = {}
        plantation[plant].rarity = rare;
        plantation[plant].rating = 0
        plantation[plant].average = 0
        
    }
    let readLine = input.shift()
    while (readLine !== "Exhibition") {
        let command = readLine.split(": ")
        if (command[0] == "Rate") {
            let [plant, rating] = command[1].split(" - ")
            rating = Number (rating);
            if (plantation.hasOwnProperty(plant)) {
                let num = Number (plantation[plant].rating);
                plantation[plant].rating = num + rating
                plantation[plant].average++
            } else {
                console.log("error");
            }
        } else if (command[0] == "Update") {
            let [plant, rarity] = command[1].split(" - ")
            if (plantation.hasOwnProperty(plant)) {
                plantation[plant].rarity = rarity;
            } else {
                console.log("error");
            }
        } else if (command[0] == "Reset") {
            let plant = command[1]
            if (plantation.hasOwnProperty(plant)) {
                plantation[plant].rating = 0;
                plantation[plant].average = 0;
            } else {
                console.log("error");
            }
        }

        readLine = input.shift()
    }
    for (let key in plantation) {

       let average = Number (plantation[key].average)
       let rating = Number (plantation[key].rating)
       if (average > 0) {
       let sum = rating / average
       plantation[key].rating = sum
       }
    }
    console.log("Plants for the exhibition:");
    for (const key in plantation) {
        let rating = Number (plantation[key].rating)
        console.log(` - ${key}; Rarity: ${plantation[key].rarity}; Rating: ${rating.toFixed(2)}`);
    }
}
plantDiscovery (["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: andelabra - 6",
"Exhibition"])

