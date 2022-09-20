function books (input) {
    let pagesNums = Number (input [0]);
    let pages = Number (input[1]);
    let days = Number (input[2]);
    let hours = pagesNums / pages;
    let hoursPerDay = hours / days;
    console.log (hoursPerDay)
    
}
books ([`212`, `20`, `2`])