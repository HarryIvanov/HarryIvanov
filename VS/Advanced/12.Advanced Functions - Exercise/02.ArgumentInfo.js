function ArgumentInfo (...arguments) {
let info = {};

arguments.forEach((line) => {
    let type = (typeof line);
    console.log(`${type}: ${line}`);
    if (!info[type]) {
        info[type] = 0;
    }
    info[type]++
})
Object.keys(info).sort((a,b) => info[b] - info[a]).forEach((key) => console.log(`${key} = ${info[key]}`));


        

    
}
ArgumentInfo('cat', 42, function () { console.log('Hello world!'); }, 'house', 45, 45)