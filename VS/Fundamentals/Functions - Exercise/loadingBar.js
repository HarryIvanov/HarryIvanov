function loadingBar (num) {


    let completed = '%'.repeat(num / 10);
    let incomplete = '.'.repeat(10 - completed.length)
    let bar = completed+incomplete

    
    if (num < 100) {
    console.log(`${num}% [${bar}]`);
    console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log(`${num}% [${bar}]`);
    }
}
loadingBar (30)