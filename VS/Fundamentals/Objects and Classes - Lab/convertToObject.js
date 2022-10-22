function convertToObject (str) {
    let news = JSON.parse(str)
    
    for (let key of Object.keys(news)) {
        console.log(`${key}: ${news[key]}`);
    }
    
}
convertToObject ('{"name": "George", "age": 40, "town": "Sofia"}')