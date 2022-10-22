function flightSchedule (array) {
    let preFlights = array[0];
    let canceled = array[1];
    let magicWord = array[2].toString()
    let fligths = []
    
    for (let i = 0; i < preFlights.length; i++) {
        let [number, destination] = preFlights[i].split(" ")
        let dest = {};
        dest.number = number;
        dest.Destination = destination;
        dest.Status = "Ready to fly"
        fligths.push(dest)
    }

    for (let i = 0; i < canceled.length; i++) {
        let [name, status] = canceled[i].split(" ");
        if (status === "Cancelled") {
            for (let x = 0; x < fligths.length; x++) {
                if (name == fligths[x].number) {
                    fligths[x].Status = "Cancelled"
                }
            }
        }
    }

    for (let el of fligths) {
        if (el.Status == magicWord) {
            delete el.number
            console.log(el);
        }
    }    

}
flightSchedule ([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]
)