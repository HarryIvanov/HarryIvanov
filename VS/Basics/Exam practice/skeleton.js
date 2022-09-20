function skeleton (input) {
    let controlMinutes = Number (input[0]);
    let controlSeconds = Number (input[1]);
    let meters = Number (input[2]);
    let secondsPerHundred = Number (input[3]);

    let controlTotal = controlMinutes * 60 + controlSeconds
    let timeTaken = (meters / 120) * 2.5
    let personTotal = meters / 100 * secondsPerHundred - timeTaken

    if (personTotal <= controlTotal) {
        console.log (`Marin Bangiev won an Olympic quota!`)
        console.log (`His time is ${personTotal.toFixed(3)}.`);
    } else {
        let diff = personTotal - controlTotal
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    }







} 
skeleton (["1",
"20",
"1546",
"12"])

