function destinationMapper (str) {
    let regExp = /([=\/])(?<place>[A-Z][A-Za-z]{2,})\1/g
    let matches = regExp.exec(str)
    let result = []

    while (matches !== null) {
        let place = matches.groups["place"]
        result.push(place)
        matches = regExp.exec(str)
    }
    console.log(`Destinations: ${result.join(", ")}`);
    let points = 0;
    for (const el of result) {
        points += el.length
    }
    console.log(`Travel Points: ${points}`);
    
    
}
destinationMapper ("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")