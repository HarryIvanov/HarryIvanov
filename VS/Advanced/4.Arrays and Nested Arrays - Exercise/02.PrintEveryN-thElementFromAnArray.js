function printEveryNthElementFromAnArray (arr, n) {
    let result = [];
    for (let index = 0; index < arr.length; index+=n) {
        result.push(arr[index])
        
    }
    return result
}
printEveryNthElementFromAnArray (['dsa',
'asd', 
'test', 
'tset'], 
2)

/*     
return arr.filter((_, index) => index % step == 0)


*/

