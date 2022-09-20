function building (input) {

    let floors = Number (input[0]);
    let rooms = Number (input[1]);
    let comm = ""

    for (let i = floors; i > 0; i--) {
        for (let y = 0; y < rooms; y++) {
            if (i == floors) {
                comm = comm + `L${i}${y} ` 
            } else if (i % 2 == 1) {
                comm = comm + `A${i}${y} ` 
            } else {
                comm = comm + `O${i}${y} ` 
            }
            
        } 
        console.log (comm)
        comm = ""
        
    } 



}
building (["6", "4"])
