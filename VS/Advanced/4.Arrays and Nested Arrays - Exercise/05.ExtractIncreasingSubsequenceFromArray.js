function extractIncreasingSubsequenceFromArray(arr) {
  // let biggest = arr[0];

// return arr.reduce((acc, currEle) => {
//   if (biggest <= currEle) {
//     acc.push(currEle);
//     biggest = currEle
//   }
// }, []) 

  let biggest = Number.MIN_SAFE_INTEGER;

  let resultArr = [];

  arr.filter(check);

  function check(a) {
    if (a >= biggest) {
      biggest = a;

      resultArr.push(a);
    }
  }

  return resultArr
}
extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);







