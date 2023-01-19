function adAstra (input) {
    let regExp = /([#|])(?<item>[A-Za-z ]+)\1(?<date>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<calories>[\d]{1,5})\1/g;
    let readLine = input.shift();
    let matched = readLine.matchAll(regExp)
    let totalCalories = 0;
    
    for (const el of matched) {
        totalCalories += Number (el.groups.calories)
    }
    let days = Math.floor(totalCalories / 2000)
    console.log(`You have food to last you for: ${days} days!`);
    matched = readLine.matchAll(regExp)
    for (let el of matched) {
        let name = el.groups.item
        let date = el.groups.date
        let calories = el.groups.calories
        console.log(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`);
    }
    
   

    
}
adAstra ([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )