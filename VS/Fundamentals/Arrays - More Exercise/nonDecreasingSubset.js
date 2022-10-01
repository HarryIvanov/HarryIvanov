function nonDecreasingSubset (array) {
    let newArr = []
    let firstNum = 0;
        for (let i = 0; i <array.length; i++) {
            if (i == 0) {
                newArr.push(array[i]); 
                continue;
            }
            if (array[i] >= array[i-1]) {
                newArr.push(array[i])
            }

        
        }
        console.log(newArr.join(" "));
    }

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])