function demo(input) {
    let number = input[0];
    if (number <= 10) {
        if (number % 2 === 0) {
            console.log(`even number < 10`);
        } else  {
            console.log (`Number is odd and > 10`)
        }
    } else if (number <= 15){
        if (number % 2 === 0) {
            console.log (`Number is even <= 15`) 
            } else {
                console.log (`Number is odd <= 15`)
            }
        }
    }
    demo ([9])