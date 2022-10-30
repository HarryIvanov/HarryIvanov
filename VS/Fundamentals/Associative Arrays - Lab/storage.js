function storage (input) {
    let myMap = new Map ();
    for (const line of input) {
        let [name, qty] = line.split(" ")
        if (myMap.has(name)) {
            let sum = 0;
            let n1 = Number (myMap.get(name));
            let n2 = Number (qty);
            sum = n1+n2
            myMap.set(name, sum)
        }else {
            myMap.set(name, qty)
        }
    }
    
    for (const [key, qty] of myMap) {
        console.log(`${key} -> ${qty}`);
    }
}
storage (['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)