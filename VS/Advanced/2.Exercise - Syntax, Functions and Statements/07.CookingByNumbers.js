function cookingByNumbers (...params) {
    let num = Number (params[0]);
    
    for (const command of params) {
        if (command == "chop") {
            num /= 2;
            console.log(num);
        } else if (command == "dice") {
            num = Math.sqrt(num);
            console.log(num);
        } else if (command == "spice") {
            num += 1;
            console.log(num);
        } else if (command == "bake") {
            num *= 3;
            console.log(num);
        } else if (command == "fillet") {
            num = num * 0.80;
            console.log(num);
        }
        

    }

    
}
cookingByNumbers ('9', 'dice', 'spice', 'chop', 'bake', 'fillet')