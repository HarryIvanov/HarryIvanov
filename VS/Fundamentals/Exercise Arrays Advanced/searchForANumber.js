function searchForANumber (array, parameters) {
    slice = Number (parameters[0]);
    remove = Number (parameters[1]);
    specialNumber = Number (parameters[2]);
    let counter = 0;

    newArr = array.splice(0,slice);
    newArr.splice(0,remove);
    for (el of newArr) {
        if (Number (el) === specialNumber) {
            counter++
        }
    }
    console.log(`Number ${specialNumber} occurs ${counter} times.`);

}
searchForANumber ([7, 1, 5, 8, 2, 7],[3, 1, 5])