function login (input) {
let index = 0;
let login = (input [index]);
index++;
let password = "";
let counter = 0;
let isFound = false
    for (let i = login.length-1; i >= 0; i-- ) {
        password += login.charAt(i)
    }
    while (input [index] !== password) {
        counter++
        if (counter === 4) {
            console.log(`User ${login} blocked!`);
            break;
        } else {
            console.log("Incorrect password. Try again.");
        }
        index++;
        }
    if (input [index] === password) {
        console.log(`User ${login} logged in.`);
    }
}

login (['sunny','rainy','cloudy','sunny','not sunny'])