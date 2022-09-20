function localStore(input) {
    let product = input[0];
    let city = input[1];
    let qty = Number(input[2]);

    if (city === 'Sofia') {
        if (product === `coffee`) {
            console.log(qty * 0.50);
        } else if (product === `water`) {
            console.log(qty * 0.80);
        } else if (product === `beer`) {
            console.log(qty * 1.20);
        } else if (product === `sweets`) {
            console.log(qty * 1.45);
        } else if (product === `peanuts`)
            console.log(qty * 1.60);
    } else if (city === `Plovdiv`) {
        if (product === `coffee`) {
            console.log(qty * 0.40);
        } else if (product === `water`) {
            console.log(qty * 0.70);
        } else if (product === `beer`) {
            console.log(qty * 1.15);
        } else if (product === `sweets`) {
            console.log(qty * 1.30);
        } else if (product === `peanuts`)
            console.log(qty * 1.50);
    } else if (city === `Varna`) {
        if (product === `coffee`) {
            console.log(qty * 0.45);
        } else if (product === `water`) {
            console.log(qty * 0.70);
        } else if (product === `beer`) {
            console.log(qty * 1, 10);
        } else if (product === `sweets`) {
            console.log(qty * 1.35);
        } else if (product === `peanuts`)
            console.log(qty * 1.55);
    }
}


localStore([`coffee`, `Plovdiv`, `2`])