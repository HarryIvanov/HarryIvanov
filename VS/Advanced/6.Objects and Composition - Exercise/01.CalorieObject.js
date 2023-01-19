function calorieObject (arr) {
    // let result = {};

    // for (let i = 0; i < arr.length; i++) {
    //     if (i % 2 == 0) {
    //         let name = arr[i];
    //         let calories = Number (arr[i+1]);
    //         result[name] = calories
    //     } 
    // }
    // console.log(result);
    return arr.reduce((acc, curr, index) => {
        if (index % 2 == 0) acc[curr] = Number (arr[index + 1])
        return acc
    }, {})





}
console.log(calorieObject (['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))