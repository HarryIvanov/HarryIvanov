function veggies(input) {
    let fruit = input[0];
    switch (fruit) {
        case `banana`:
        case `kiwi`:
        case `cherries`:
        case `lemon`:
        case `grapes`: console.log(`fruit`); break;
        case `tomato`:
        case `cucumber`:
        case `pepper`:
        case `carrot`: console.log(`veggie`); break;
        default: console.log(`uknown`);

    }
}

veggies ([`carrot`]);