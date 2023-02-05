function addItem() {
    const text = document.getElementById('newItemText').value;
    let delBtn = document.createElement('a');

    delBtn.href = "#";
    delBtn.textContent = '[Delete]';
    

    let li = document.createElement('li');
    li.textContent = text;
    li.appendChild(delBtn);
    let list = document.getElementById('items');
    delBtn.addEventListener('click', del);
    
    function del () {
        li.remove()
    }
    
    

    list.appendChild(li);
}