function addItem() {
    const text = document.getElementById('newItemText').value;
    const value = document.getElementById('newItemValue').value;

    const newOption = document.createElement('option');
    newOption.textContent = text;
    newOption.value = value;
    

    const select = document.querySelector('#menu');
    select.appendChild(newOption);
    
    document.getElementById('newItemText').value = ""
    document.getElementById('newItemValue').value = ""

}