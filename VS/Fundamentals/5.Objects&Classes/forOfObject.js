let myObj = {name: "Peter", age: "18", grade: "5.50"};

for (let key of Object.keys(myObj)) {
    console.log(`${key}: ${myObj[key]}`);
    
}
for (const key in myObj) {
    console.log(key, myObj[key]);
}

