function readText (input){
    let index = 0;
    let n = input[index];
    index++

    while (n !== "Stop") {
        console.log (n);
        n = input [index];
        index++
    }
}
readText (["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])