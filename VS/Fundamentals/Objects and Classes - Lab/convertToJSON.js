function convertToJSON (name, lastName, hairColor) {
    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }
    let convert = JSON.stringify(person)
    console.log(convert);
}
convertToJSON ('George', 'Jones', 'Brown')