function guests (input) {
    let guests = Number (input[0]);
    let budget = Number (input[1]);
    let eggs = guests * 2
    let breads = guests / 3
    let eggsPrice = eggs * 0.45
    let breadPrice = Math.ceil(breads) * 4

    let total = eggsPrice + breadPrice

    if (total <= budget) {
        console.log (`Lyubo bought ${Math.ceil(breads)} Easter bread and ${eggs} eggs.`)
        let diff = budget - total
        console.log (`He has ${diff.toFixed(2)} lv. left.`)
    } else {
        console.log (`Lyubo doesn't have enough money.`)
        let diff = total - budget
        console.log (`He needs ${diff.toFixed(2)} lv. more.`)
    }



}
guests (["9",
"12"])
