function employees (array) {
    let office = []
    for (let readLine of array) {
        let personalNumber = readLine.length;
        let person = {}
        person.name = readLine,
        person.number = personalNumber
        office.push(person)
    }
    for (let employee of office) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`);
    }
}
employees ([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])