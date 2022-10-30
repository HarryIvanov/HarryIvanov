function movies (array) {
    let final =[];

    for (let i = 0; i < array.length; i++) {
        if (array[i].includes("addMovie")) {
            let movie = {}
            movie.name = (array[i].replace("addMovie ",""))
            final.push(movie)
        } else if (array[i].includes("directedBy")) {
            let [name, director] = array[i].split(" directedBy ")
            for (let x of final) {
                if (x.name == name) {
                    x.director = director;
                }
            }
        } else if (array[i].includes("onDate")) {
            let [name, date] = array[i].split(" onDate ") 
            for (let x of final) {
                if (x.name == name) {
                    x.date = date;
                }
            }
        }
    }
    for (let x of final) {
        if (x.name && x.director && x.date) {
            console.log(JSON.stringify(x));
        }
    }
}
movies ([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ])
    