let obj = {
    name: 'Peter',
    greed() {
        console.log(`${this.name}`);
    }
}
obj.greed()
function random () {
    console.log(this);
    return Math.random();
}
random()
