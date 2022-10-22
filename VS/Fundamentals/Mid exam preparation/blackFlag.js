function blackFlag(array) {
  let newArr = array.map(Number);
  let days = newArr[0];
  let plunder = newArr[1];
  let expectedPlunder = newArr[2];
  let totalPlunder = 0;

  for (let i = 1; i <= days; i++) {
    if (i % 3 === 0) {
      totalPlunder += plunder * 1.5;
      if (i % 5 === 0) {
        totalPlunder = totalPlunder * 0.7;
      }
    } else if (i % 5 === 0) {
      totalPlunder += plunder;
      totalPlunder = totalPlunder * 0.7;
    } else {
      totalPlunder += plunder;
    }
  }
  if (totalPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    let percentage = (totalPlunder / expectedPlunder) * 100;
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["15", "40", "100"]);
