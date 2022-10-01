function rotateArray (array) {
   let newLength = array.length-1 
   
   let newArr = array
   
   let step = 0;
   
    
    for (let x = newLength; x > 0; x--) {
        step = array[x];
        break;
    }
    newArr.pop()
    for (let i = 0; i < step; i++) {
        let num1 = newArr[newLength-1]
        newArr.unshift(num1)
        newArr.pop()
    }
    console.log(newArr.join(" "));
}
rotateArray (['Banana', 'Orange', 'Coconut', 'Apple', '15'])