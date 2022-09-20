function cat (input) {
    let minutesPerDay = Number (input[0]);
    let walkings = Number (input[1]);
    let calories = Number (input[2]);
    let allMinutes = walkings * minutesPerDay
    let totalCalories = allMinutes * 5
    let caloriesPerDay = calories / 2


    if (totalCalories >= caloriesPerDay) {
        console.log (`Yes, the walk for your cat is enough. Burned calories per day: ${totalCalories}.`)
    } else {
       console.log (`No, the walk for your cat is not enough. Burned calories per day: ${totalCalories}.`)
    }





}
cat (["15",
"2",
"500"])


