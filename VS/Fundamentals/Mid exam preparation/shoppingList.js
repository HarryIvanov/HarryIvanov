function shoppingList (array) {
let list = array.shift().split("!")
let length = Number (array.length)
    for (let i = 0; i < length; i++) {
        let end = array[i].toString()
        if (end == "Go Shopping!") {
            console.log(list.join(", "));
            break;
        }
        let [command, token1, token2] = array[i].split(" ")
        token1 = token1
        token2 = token2
        if (command == "Urgent") {
            if (list.includes(token1)) {
                continue;
            } else {
                list.unshift(token1)
            }
        } else if (command == "Unnecessary") {
            if (list.includes(token1)) {
                let n = Number (list.indexOf(token1))
                list.splice(n,1)
            }
        } else if (command == "Correct") {
            if (list.includes(token1)) {
                let n = Number (list.indexOf(token1))
                list.splice(n, 1, token2)
            }
        } else if (command == "Rearrange") {
            if (list.includes(token1)) {
                let n = Number (list.indexOf(token1))
                let add = list.splice(n,1).toString()
                list.push(add)
            }
        } 
    }

}
shoppingList (["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

