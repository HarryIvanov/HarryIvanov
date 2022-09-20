function demo (input){
let index = 0;

while (true) {
    let name = input [index];
    index++;
    if (name ==`Stop`) {
        break;
    }console.log (name)

}
}demo([`Nakov`, `Dimi`, `Harry`, `Stop`])