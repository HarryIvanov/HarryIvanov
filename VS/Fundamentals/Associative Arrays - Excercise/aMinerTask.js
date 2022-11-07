function aMinerTask (input) {
    let result = new Map ();
        for (let index = 0; index < input.length; index++) {
            let element = input[index];
            let qty = Number (input[index + 1]);
            index++
            if (result.has(element)) {
                let num = Number (result.get(element));
                result.set(element, num + qty)
            } else {
                result.set(element, qty)
            }
        }
        for (const [key, value] of result) {
            console.log(`${key} -> ${value}`);
        }
}
aMinerTask ([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])