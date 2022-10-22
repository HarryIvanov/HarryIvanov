// Винаги трябва да имаме двойни кавички при ключовете!!

function solve (data) {

    console.log(data);
    let stringify = JSON.stringify(data)
    console.log(stringify); //връща стринг. Не можем да достъпваме keys etc. 
    let parse = JSON.parse(stringify)
    console.log(parse); //Връща като го обратно в обект. Можем да го достъпваме.

    

    let data2 = JSON.parse(JSON.stringify(data)) // прави нов обект. Чупи референцията към стария
    data2.name = "Pesho"
    console.log(data2);




}
solve ({
    "name": "Ivan",
    "age": 25,
    "grades": {
        "Math": [2.50, 4.50], // можем да имаме обект в обекта
        "Chemistry": [4.50]
        }
    })