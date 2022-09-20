function fishTank (input) {
    let length = Number (input [0]);
    let width = Number (input [1]);
    let heigth = Number (input [2]);
    let percent = Number (input [3]) / 100
    let volume = length * width * heigth
    let liters = volume / 1000
    let need = liters * ( 1- percent )



    console.log (need)
}
fishTank (["85 ",
"75 ",
"47 ",
"17 "])