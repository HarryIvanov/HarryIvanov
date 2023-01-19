function plantDiscovery (input) {
    let plants = {};
    let rotations = Number (input.shift());

    for (let i = 0; i < rotations; i++) {
        let [plant, rarity] = input.shift().split("<->");
        rarity = Number (rarity)
        plants[plant] = {rarity, rating: 0, averageRating: 0}
    }
    let readLine = input.shift();

    while (readLine !== "Exhibition") {
        let [command, ...tokens] = readLine.split(": ");
        if (command == "Rate") {
            let [plant, rating] = tokens.toString().split(" - ")
            rating = Number (rating);

            if (plants.hasOwnProperty(plant)) {
                plants[plant].rating += rating;
                plants[plant].averageRating++
            } else {
                console.log("error");
            }
        } else if (command == "Update") {
            let [plant, rarity] = tokens.toString().split(" - ");
            rarity = Number (rarity);
            if (plants.hasOwnProperty(plant)) {
                plants[plant].rarity = rarity;
            } else {
                console.log("error");
            }
        } else if (command == "Reset") {
            let plant = tokens[0];

            if (plants.hasOwnProperty(plant)) {
                plants[plant].rating = 0;
                plants[plant].averageRating = 0;
            } else {
                console.log("error");
            }
        }


        readLine = input.shift();
    }
    console.log("Plants for the exhibition:");
    for (let plant in plants) {
        let sum = plants[plant].rating / plants[plant].averageRating
        if (!sum) {
            sum = 0;
        }
        console.log(` - ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${sum.toFixed(2)}`);
    }
}
plantDiscovery (["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])
