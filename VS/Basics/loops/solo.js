function demo(input) {
    let n = input[0];
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        let char = n.charAt(i);
        switch (char) {
            case `a`: sum = sum + 1; break; // за всеки кейс брейк! //задаваме нова променлива sum! 
            case `e`: sum = sum + 2; break;
            case `i`: sum = sum + 3; break;
            case `o`: sum = sum + 4; break;
            case `u`: sum = sum + 5; break;
            default: break;
        }

    } console.log(`The sum of the digits is:${sum}`) //извън цикъла!
}
demo([`bamboo`])