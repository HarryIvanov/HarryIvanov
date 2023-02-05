function addItem() {
    const result = document.getElementById('newItemText');

    let li = document.createElement('li');
    let list = document.getElementById('items');
    li.textContent = result.value;

    list.appendChild(li);
    

    

    
}