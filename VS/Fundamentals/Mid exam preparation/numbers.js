function numbers(str) {
  let arr = str.split(" ");
  arr.map(Number);
  let sum = 0;

  for (let el of arr) {
    sum += Number(el);
  }
  let average = sum / arr.length;

  let finalArr = [];
  for (let el of arr) {
    if (Number(el) > average) {
      finalArr.push(Number(el));
    } else {
      continue;
    }
  }
  finalArr.sort((a, b) => b - a);
  if (finalArr.length === 0) {
    console.log("No");
  }
  if (arr.length >= 5) {
    finalArr.splice(5, finalArr.length);
    console.log(finalArr.join(" "));
  }
  if (arr.length < 5 && arr.length > 0) {
    console.log(finalArr.join(" "));
  }
}
numbers("-1 -2 -3 -4 -5 -6");
