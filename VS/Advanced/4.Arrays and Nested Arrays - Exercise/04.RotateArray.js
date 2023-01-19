function rotateArray (arr, n) {
    let myArr = arr.slice();

    for (let index = 0; index < n; index++) {
        arr.unshift(arr.pop())
    }
    console.log(myArr.join(" "));
}
rotateArray (['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)
