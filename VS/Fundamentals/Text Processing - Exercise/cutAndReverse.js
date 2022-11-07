function cutAndReverse (str) {
    let str1 = str.substring(0, str.length / 2)
    let arr1 = []
    let arr2 = []
    let str2 = str.substring(str.length / 2)
    for (const el of str2) {
        arr2.push(el)
    }
    arr2.reverse()
    
    for (const el of str1){
        arr1.push(el)
    }
    arr1.reverse()
    console.log(arr1.join(""));
    console.log(arr2.join(""));
}
cutAndReverse ('tluciffiDsIsihTgnizamAoSsIsihT')