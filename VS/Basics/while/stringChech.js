function demo(input) {
    let index = 0;
    let name = input[index];
    index++;
    while (name !== `Stop`) {
        console.log(name);
        name = input[index];
        index++


    }
}
demo([`Nakov`, `Dimi`, `Harry`, `Stop`])