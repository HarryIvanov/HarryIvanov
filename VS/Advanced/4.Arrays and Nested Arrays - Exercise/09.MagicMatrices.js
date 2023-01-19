function isMagicMatrix(matrix) {
    let sumRow = row => matrix[row].reduce((a, b) => a + b);
    let sumCol = col => matrix.map(row => row[col])
        .reduce((a, b) => a + b);

    let isOk = true;    
 
    if (matrix.length > 0) {
        let targetSum = sumRow(0);
 
        for (let i = 1; i < matrix.length; i++) {
            let rowSum = sumRow(i);
            if (rowSum !== targetSum) {
                isOk = false;
            }
        }
 
        for (let j = 0; j < matrix[0].length; j++) {
            let colSum = sumCol(j);
            if (colSum !== targetSum) {
                isOk = false;
            }
        }
    }
 
    console.log(isOk);
}
 
isMagicMatrix(
    [[4, 5, 6],
    [4, 5, 6],
    [5, 5, 5]]
)



/*
let sumRows = 0;
let sumCols = 0;

for (let i = 0; i < matrix; i++) {
    let currentArray = matrix[i].join("");
    for (let j = 0; currentArray.length; j++) {
        sumRow += Number (currentArray[j]);
        sumCol += Number (currentArray[0])
    }
}
if (sumRow === sumCol) {
    console.log("true")
} else {
    console.log("false")
}




*/