function reverse (num, array) {
    let reversed = ""
    let nums = []
    let check = 0;
    
    for (let x = num - 1; x >= 0; x--) {
        nums.push(array[x])
    }
    console.log(nums.join(' '));

}
reverse (3, [10, 20, 30, 40, 50]) // 30 20 10
reverse (4, [-1, 20, 99, 5]) // 5 99 20 -1
reverse (2, [66, 43, 75, 89, 47]) // 43 66