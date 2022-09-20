function colors (input) {
    let index = 0;
    let counter = Number (input[index]);
    index++
    let color = input[index];
    let red = 0;
    let orange = 0;
    let green = 0;
    let blue = 0;
    let num = 0;
    let maxColor = 0;

    while (index <= counter) {
        color = input[index];
        if (color == `red`) {
            red++
            if (red > num) {
                num++
                maxColor = `red`
            }
        } else if (color == `green`) {
            green++
            if (green > num) {
                num++
                maxColor = `green`
            }
        } else if (color == `blue`) {
            blue++
            if (blue > num) {
                num++
                maxColor = `blue`
            }
        } else if (color === `orange`) {
            orange++
            if (orange > num) {
                num++
                maxColor = `orange`
            }
        }
            index++

    }
    
    console.log (`Red eggs: ${red}`)
    console.log (`Orange eggs: ${orange}`)
    console.log (`Blue eggs: ${blue}`)
    console.log (`Green eggs: ${green}`)
    console.log (`Max eggs: ${num} -> ${maxColor}`)
}
colors (["7",
"orange",
"blue",
"green",
"green",
"blue",
"red",
"green"])


