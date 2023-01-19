function timeToWalk (steps, meters, kmh) {
    let distance = steps * meters;
    let speedInMeters = kmh / 3.6;
    let rest = Math.floor(distance / 500) * 60;
    let time = distance / speedInMeters + rest;

    let hours = Math.floor(time/3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time % 60);

    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);




}    
timeToWalk (4000, 0.60, 5)