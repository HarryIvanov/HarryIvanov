function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', mover);

    function mover (event) {
        let result = Math.floor(event.offsetX / 300 * 100);
        document.getElementById('result').textContent = `${result}%`
    }
}