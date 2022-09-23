function DayOfWeek (n) {

    let dayNameArr = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ]
    n > dayNameArr.length || n <= 0 ? console.log("Invalid day!") : console.log(dayNameArr[n-1]) 

    

}
DayOfWeek (7)