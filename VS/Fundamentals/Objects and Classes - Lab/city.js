function city (cityInfo) {
    
    let props = Object.keys(cityInfo)
    
    for (let key of props) {
        console.log(`${key} -> ${cityInfo[key]}`);
    }
}
city ({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})