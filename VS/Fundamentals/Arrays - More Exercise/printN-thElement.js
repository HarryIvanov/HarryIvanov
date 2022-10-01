function printElement (array) {
    let step = 0;
    let newArr = []
    for (let x = array.length-1; x > 0; x--) {
        step = array[x];
        break;
    }

for (let i = 0; i < array.length-1; i++) {
    if (i % step == 0) {
    newArr.push(array[i]);
    }
}
    console.log(newArr.join(" "));

}
printElement (['dsa', 'asd', 'test', 'test', '2'])