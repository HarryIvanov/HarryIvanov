function solve() {
    const firstOptionElement = document.createElement('option');
    const secondOptionElement = document.createElement('option');

    firstOptionElement.value = 'binary';
    secondOptionElement.value = 'hexadecimal';
    firstOptionElement.innerHTML = 'Binary';
    secondOptionElement.innerHTML = 'Hexadecimal';

    const menuToElement = document.getElementById('selectMenuTo');
    menuToElement.appendChild(firstOptionElement);
    menuToElement.appendChild(secondOptionElement);
    
    const button = document.getElementsByTagName('button')[0];

    button.addEventListener('click', () => {
        const numberInput = document.getElementById('input');

        const outputResult = document.getElementById('result');
        if (menuToElement.value === 'binary') {
            outputResult.value = Number(numberInput.value).toString(2);
        } else if (menuToElement.value === 'hexadecimal') {
            outputResult.value = Number(numberInput.value).toString(16).toUpperCase();
        }
    })
}