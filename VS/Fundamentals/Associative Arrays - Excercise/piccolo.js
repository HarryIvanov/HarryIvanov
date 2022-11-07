function piccolo (input) {
    let parking = new Map ();
    for (const line of input) {
        let [command, car] = line.split(", ")
        if (command == "IN") {
            parking.set(car, command)
        } else {
            parking.delete(car)
        }
    }
    let sorted = Array.from(parking).sort(([keyA, valueA], [keyB, valueB])=> {
        return keyA.localeCompare(keyB)
    })
    if (sorted) {
        for (const [key, value] of sorted) {
            console.log(key);
        }
    } else {
        console.log("Parking Lot is Empty");
    }
}
piccolo (['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)