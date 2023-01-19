function sortingNumbers (arr) {
    let result = [];
    isOk = false;
    let length = 0;
    if (arr.length % 2 == 0) {
        length = Math.floor(arr.length / 2)
        isOk = true
    } else {
        length = Math.ceil(arr.length / 2)
    }
    
    if (isOk) {
    for (let i = 0; i < length; i++) {
        let sorted = (arr.sort((a, b) => a - b));
        result.push(sorted[i]);
        sorted = (arr.sort((a, b) => b - a));
        result.push(sorted[i]);
        }
    }  else {
        for (let i = 0; i < length; i++) {
            let sorted = (arr.sort((a, b) => a - b));
            result.push(sorted[i]);
            sorted = (arr.sort((a, b) => b - a));
            result.push(sorted[i]);
            }
            result.pop();
    }
    return result
    
}
sortingNumbers ([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 2])



/*
let resArray = []
arr = arr.sort((a,b => a - b));
while (arr.length !== 0) {
    resArray.push(arr.shift());
    resArray.push(arr.pop())
}


return resArray






*/