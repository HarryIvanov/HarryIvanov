function towns (input) {
    let newArr = [];
    
    for (let x of input) {
        
        let [name,latitude, longitude] = x.split(" | ")
        latitude = Number (latitude).toFixed(2)
        longitude = Number (longitude).toFixed(2)
        let myObj = {
            town : name,
            latitude : latitude,
            longitude : longitude
        }
        newArr.push(myObj)
    }
    
    for (let x of newArr) {
        console.log(x);
    }
}
towns (['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)