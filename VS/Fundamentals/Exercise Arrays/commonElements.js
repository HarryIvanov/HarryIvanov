function commonElements (arr1, arr2) {
    let match = 0;

    for (let i =0; i < arr1.length; i++) {
        match = arr1[i]
        for (let x = 0; x < arr2.length; x++) {
            if (arr2[x] === match) {
                console.log(match);
            }
        }
    }



}
commonElements (['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])