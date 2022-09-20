function exam (input) {

    let examHH = Number (input[0]);
    let examMM = Number (input[1]);
    let arrivalHH = Number (input[2]);
    let arrivalMM = Number (input[3]);

    let examTime = examHH * 60 + examMM;
    let arrivalTime = arrivalHH * 60 + arrivalMM;
    let total = 0;

    if (arrivalTime > examTime) {
        console.log (`Late`)
        let time = Math.abs(arrivalTime - examTime);
        if ( time >= 60) {
            let h = Math.floor(time / 60);
            let m = time % 60
            if (m < 10) {
                console.log (`${h}:0${m} hours after the start`)
            } else {
                console.log (`${h}:${m} hours after the start`)
            }
        } else if (time < 60){
            let h = Math.floor(time / 60);
            let m = time % 60
            console.log (`${m} minutes after the start`)
        } 
    } else if (arrivalTime === examTime || examTime - arrivalTime <= 30) {
        console.log (`On time`)
       let time = Math.abs(arrivalTime - examTime)
       if (time !==0) {
           console.log (`${time} minutes before the start`)
       }
    } else {
        console.log (`Early`)
        let time = Math.abs(arrivalTime - examTime);
        if ( time >= 60) {
            let h = Math.floor(time / 60);
            let m = time % 60
            if (m < 10) {
                console.log (`${h}:0${m} hours before the start`)
            } else {
                console.log (`${h}:${m} hours before the start`)
            } 
        } 
        if (time < 60){
            let h = Math.floor(time / 60);
            let m = time % 60
            console.log (`${time} minutes before the start`)
    }    
        
}      

    





}
exam (["11",
"30",
"10",
"55"])