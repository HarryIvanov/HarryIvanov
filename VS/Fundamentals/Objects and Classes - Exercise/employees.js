function employees (input) {
    let epl = [];
    class Employee {
        constructor (name, personal) {
            this.name = name;
            this.personal = personal;
        }
    }
    for (let z of input) {
        let name = z
        let personal = z.length
        epl.push(new Employee(name, personal))
    }
    for (x of epl) {
        console.log(`Name: ${x.name} -- Personal Number: ${x.personal}`);
    }
}
employees ([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )