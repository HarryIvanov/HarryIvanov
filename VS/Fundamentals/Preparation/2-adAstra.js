function adAstra (input) {
    let message = input.shift();
    let regExp = /([#|\|])(?<item>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;
    let days = 0;
    let totalCalories = 0;

    let matched = regExp.exec(message);

    while (matched !== null) {
        totalCalories += Number (matched.groups["calories"])
        matched = regExp.exec(message);
    }
    days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    matched = regExp.exec(message);

    while (matched !== null) {
        console.log(`Item: ${matched.groups["item"]}, Best before: ${matched.groups["date"]}, Nutrition: ${matched.groups["calories"]}`);
        matched = regExp.exec(message);
    }


}
adAstra ([ '$$#@@%^&#Fish#24/12/20#200#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#0#^#@aswe|Milk|05/09/20|0|' ]
    )