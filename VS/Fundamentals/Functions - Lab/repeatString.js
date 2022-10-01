function repeatString (string, count) {
    let res = ""
    for (let i = 0; i < count; i++) {
        res+=string
    }
    return (res)
}
    let fullRes = (repeatString ("String", 3))
    console.log(fullRes);

