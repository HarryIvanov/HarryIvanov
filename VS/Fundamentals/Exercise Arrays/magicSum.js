function magicSum (array, magicNumber) {
    let magic =[];
    for (let i = 0; i < array.length; i++) {
        for (let x = i + 1; x < array.length; x++) {
            if (array[i] + array[x] === magicNumber) {
                magic.push(array[i], array[x]);
                console.log(magic.join(" "));
                magic = []
            }
        }
    }
}
magicSum ([14, 20, 60, 13, 7, 19, 8],
    27
    )