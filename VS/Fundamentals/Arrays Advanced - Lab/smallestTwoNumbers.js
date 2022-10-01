function smallestTwoNumbers (array) {
    let nums = 2;
    let newArr = array.sort((a, b) => a - b)
    console.log(newArr.slice(0, nums).join(" "));
}
smallestTwoNumbers ([30, 15, 50, 5])
smallestTwoNumbers ([3, 0, 10, 4, 7, 3])