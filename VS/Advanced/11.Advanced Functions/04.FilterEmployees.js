function FilterEmployees (data, criteria) {
    let info = JSON.parse(data);
    let counter = 0;
    if (criteria != "all") {
        let [info1, info2] = criteria.split("-");
        for (const el of info) {
            if (el[info1] == info2) {
            let name = `${el.first_name} ${el.last_name}`;
            let mail = el.email;
            console.log(`${counter}. ${name} - ${mail}`);
            counter++;
            }     
        }
    } else {
        for (const el of info) {
            let name = `${el.first_name} ${el.last_name}`;
            let mail = el.email;
            console.log(`${counter}. ${name} - ${mail}`);
            counter++;

        }
    }
    
}
FilterEmployees (`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'
)