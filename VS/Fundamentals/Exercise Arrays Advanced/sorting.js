function sorting (array) {
    let newArr = [] ;
        checkArray = array;
        let rotations = array.length
        
        
        for (let i = 0; i < array.length*rotations; i++) {
            if (i % 2 === 0) {
                checkArray = checkArray.sort((a,b) => b - a)
                let num = checkArray[0] ;
                newArr.push(num)
                checkArray.shift(0)
            } else {
                checkArray = checkArray.sort((a,b) => a - b)
                let num = checkArray[0] ;
                newArr.push(num)
                checkArray.shift(0)
            }
            


        }
        console.log(newArr.join(" "));
}
sorting ([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])