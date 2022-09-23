function arrayRotation (array, rotations) {
let newArr = [];
let num = 0;

    for (let i = 0; i < rotations; i++) {
        num = array[i];
        array.push(num)
    }
let index = rotations;
let num2 = array[index]
   
for (let x = 0; x < array.length - rotations; x++) {
    newArr.push(array[index])
    index++
    num2 = array[index];
}
    console.log(newArr.join(" "));


}
arrayRotation ([32, 21, 61, 1], 4)