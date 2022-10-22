function movies (input) {
    let cinema = [];

    for (let el of input) {
        if (el.includes("addMovie")) {
            let movie = el.replace("addMovie ","");
            cinema.push({name:movie});
        } else if (el.includes("directedBy")) {
            let [movie,director] = el.split(" directedBy ");
            for (let x of cinema) {
                if (x.name === movie) {
                    x.director = director
                }
            }
        } else if (el.includes("onDate")) {
            let [movie, date] = el.split(" onDate ");
            for (let x of cinema) {
                if (x.name === movie) {
                    x.date = date
                }
            }
        }
    }
    for (let el of cinema) {
        if (el.name && el.director && el.date) {
            console.log(JSON.stringify(el));
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
    