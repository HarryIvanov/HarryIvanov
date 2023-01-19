function destinationMapper (str) {
    let townRegExp = /([=|\/])(?<place>[A-Z][A-Za-z]{2,})\1/g
    let travelPoints = 0;
    let towns = []

    let matchedPlaces = townRegExp.exec(str);

    while(matchedPlaces !== null) {
        let placeName = matchedPlaces.groups["place"];
        towns.push(placeName);
        matchedPlaces = townRegExp.exec(str);
    }
    
    for (const town of towns) {
        travelPoints += town.length;
    }

console.log(`Destinations: ${towns.join(", ")}`);    
console.log(`Travel Points: ${travelPoints}`);


}

destinationMapper ("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper ("ThisIs some InvalidInput")