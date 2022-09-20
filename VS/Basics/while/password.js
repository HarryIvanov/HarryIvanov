function password (input) {
    let index = 0;
    let name = input [0];
    let password = input[1];
    let data = input [2];

    while (data !== password) {
        data = input [index];
        index++;
    } console.log (`Welcome ${name}!`);
}
password (["Nakov",
"1234",
"Pass",
"1324",
"1234"])