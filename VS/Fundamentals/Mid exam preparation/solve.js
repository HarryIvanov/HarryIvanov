function solve (array) {
    array.map(Number)
    let filtered2 = array.filter(x => Number (x) >=0)
    console.log(filtered2);
}
solve (["0 2 2 2 0 2 "])