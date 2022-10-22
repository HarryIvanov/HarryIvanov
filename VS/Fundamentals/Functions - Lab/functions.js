//Function declaration
function solve () {
    console.log('Function declaration');
}

//Function expression
let func = function () {
    console.log('Function expression'); 
}
func(); // може да се извика само от тук. Не може да се качи в началото на кода.

//Functions always returns value
let returnedValue = solve()
console.log(returnedValue);

//call functions inside a function
function main () {
    solve()
    func()
}
//Function invokation
solve();
main();

//recursion 
function recursion (x) {
    console.log(x);
    if (x > 0) {
        recursion (x- 1)
    }
}