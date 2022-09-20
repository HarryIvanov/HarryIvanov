function area (input) {
    let type = input [0]
    let a = Number (input [1])
    let b = Number (input [2])
    let res = 0
    //square, rectangle, circle, triangle
    if (type === "square") {
        res = a * a
    } else if (type === "rectangle"){
        res = a * b
     } else if (type === "circle") {
        let res = Math.pow (a, 2) * Math.PI
        } else {
        res = a * b / 2
        }
        
    console.log (res.toFixed (3))
}
area (["square", "5"])