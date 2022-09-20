function submit (input) {
    let n1 = Number (input[0]);
    let n2 = Number (input[1]);
    let op = input[2];
    let res = 0;
    let even = 0;

    if (op == `+`) {
        res = n1 + n2
        if (res % 2 == 0) {
            even = `even`
        } else {
            even = `odd`
        } console.log (`${n1} ${op} ${n2} = ${res} - ${even}`)
        
    }   else if (op == `-`) {
        res = n1 - n2
        if (res % 2 == 0) {
            even = `even`
        } else {
            even = `odd`
        } console.log (`${n1} ${op} ${n2} = ${res} - ${even}`)
        
    } else if (op == `*`) {
        res = n1 * n2
        if (res % 2 == 0) {
            even = `even`
        } else {
            even = `odd`
        } console.log (`${n1} ${op} ${n2} = ${res} - ${even}`)
        
    } else if (op == `/`) {
        if (n2 == 0) {
            console.log (`Cannot divide ${n1} by zero`)
        } else {
            res = n1 / n2
            console.log (`${n1} ${op} ${n2} = ${res.toFixed(2)}`)
        }
    } else if (op == `%`) {
        if (n2 == 0) {
            console.log (`Cannot divide ${n1} by zero`)
        } else {
        res = n1 % n2
        console.log (`${n1} ${op} ${n2} = ${res}`)   
    }
}
}
submit (["10",
"0",
"%"])