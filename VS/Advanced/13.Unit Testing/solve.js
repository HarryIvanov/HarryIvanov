console.log("before error");
try {
    myError()
} catch (err) {
    console.log(err.message);
    console.log(err.name);
}



console.log("after error");

function myError () {
    throw new Error ("This is Error")
}