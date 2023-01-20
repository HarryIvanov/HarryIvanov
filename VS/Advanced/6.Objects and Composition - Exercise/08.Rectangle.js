function rectangle (width, height, color) {
    let create = {
        width,
        height,
        color: color[0].toUpperCase() + color.slice(1, color.length),
        calcArea: function (){
            return width * height
        }
            

    }
    return create
}


let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());



