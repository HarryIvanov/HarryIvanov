function listOfNames (arr) {
    let sorted = arr.sort((a,b ) => a.localeCompare(b));
    let n = 1;
    for (const el of sorted) {
        console.log(`${n}.${el}`);
        n += 1;
    }
}
listOfNames (["John", "Bob", "Christina", "Ema"])



/*





*/