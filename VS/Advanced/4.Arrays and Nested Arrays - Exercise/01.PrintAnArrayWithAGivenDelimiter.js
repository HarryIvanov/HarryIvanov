function printAnArrayWithAGivenDelimiter (arr, param) {
    let result = "";
    console.log(arr.join(`${param}`));
}
printAnArrayWithAGivenDelimiter(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_')