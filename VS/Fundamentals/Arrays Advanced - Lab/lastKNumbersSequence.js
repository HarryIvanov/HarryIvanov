function lastKNumbersSequence (n, k) {
    let res = [1];

        for (let i = 1; i < n; i++) {
            let sequence = res.slice(-k) 
                let sum = 0;
            for (el of sequence) {
                sum += el
            }
            res.push(sum)
        }
        console.log(res.join(" "));
}
lastKNumbersSequence (6, 3)