function prime(input) {
  let totalPrime = 0;
  let totalNotPrime = 0;
  let index = 0;
  let comm = input[index];
  let prime = true;
  let n = 0;

  while (comm !== `stop`) {
    n = Number(input[index]);
    if (n < 0) {
        console.log (`Number is negative.`);
        index++;
        comm = input[index];
        prime = true;
        continue;
      
    }  if (n === 1) {
        totalPrime = totalPrime + n
        index++
        comm = input[index];
        prime = true;
        continue;
    } 
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        prime = false;
        break;
      }
    }
    if (prime && n >= 2) {
      totalPrime = totalPrime + n;
    } else {
      totalNotPrime = totalNotPrime + n;
    }
    index++;
    comm = input[index];
    prime = true;
  }
  console.log (`Sum of all prime numbers is: ${totalPrime}`)
  console.log (`Sum of all non prime numbers is: ${totalNotPrime}`)
}
prime (["30",
"83",
"33",
"-1",
"20",
"stop"])



