function solve (array) {
    let book = {};

    for (const el of array) {
        let [name, pop] = el.split("<->")
        if (!book.hasOwnProperty(name)) {
            book[name] = Number (pop)
        } else {
            book[name] += Number (pop)
        }
    }
    for (const key in book) {
        console.log(`${key}: ${book[key]}`);
    }
}
solve (['Istanbul <-> 100000',

'Honk Kong <-> 2100004',

'Jerusalem <-> 2352344',

'Mexico City <-> 23401925',

'Istanbul <-> 1000'])