function moving (input) {
    let index = 0;
    let width = Number (input[0]);
    index++
    let length = Number (input[1]);
    index++
    let height = Number (input[2]);
    index++
    let capacity = length * width * height

    let boxes = Number (input[index]);
    let counter = input[index];
    let diff = 0;

    let noMoreSpace = true;

    while (counter !== `Done`) {
        capacity = capacity - boxes;
        if (capacity < 0) {
            diff = capacity + boxes;
            capacity = boxes - diff;
            noMoreSpace = false;
            break;
        }
        
        index++
        counter = input[index];
        boxes = Number (input[index]);
    }
if (!noMoreSpace) {
    console.log(`No more free space! You need ${capacity} Cubic meters more.`);
} else {
    console.log (`${capacity} Cubic meters left.`)
}


}
moving (["10", 
"1",
"2",
"4", 
"6",
"Done"])

