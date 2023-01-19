const myArr = [10, 20, 30, 40];

const result = myArr.reduce(reducer, 0)
console.log(result);

function reducer (accumulator, value) {
    return accumulator + value
}

//Можем да го напишем и така const result = myArr.reduce((a,v) => a + v, 0)