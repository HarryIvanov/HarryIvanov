function swiming(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let time = Number(input[2]);
    let totalTime = 0;
    let additionalSeconds = Math.floor(distance / 15) * 12.5
    let totalDistance = distance * time

    if (totalDistance + additionalSeconds >= record) {

        let totalTime = (totalDistance + additionalSeconds) - record;
        console.log(`No, he failed! He was ${totalTime.toFixed(2)} seconds slower.`)
    } else if (totalDistance + additionalSeconds < record) {

        let totalTime = (totalDistance + additionalSeconds);

        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }
}
swiming(["55555.67",
    "3017",
    "5.03"])