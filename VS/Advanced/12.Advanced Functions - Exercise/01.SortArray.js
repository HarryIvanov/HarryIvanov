function sortArray (array, str) {
    let result = [];
    if (str == "asc") {
        result = array.sort((a,b) => a-b)
    } else {
    result = array.sort((a,b) => b-a)
    }
    return result;
}
sortArray ([14, 7, 17, 6, 8], 'asc')