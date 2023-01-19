function addAndRemoveElements (arr) {
    let result = [];
    let n = 0;

    for (const el of arr) {
        n += 1;
        if (el == "add") {
            result.push(n)
        } else {
            result.pop()
        }
    }
    if (result.length > 0) {
        for (const el of result) {
            console.log(el);
        }
    } else {
        console.log("Empty");
    }
}
addAndRemoveElements (['remove', 
'remove', 
'remove']
)
