function deleteByEmail() {
    const list = document.querySelectorAll('#customers tbody tr');
    const text = document.querySelector('input[name="email"]').value;
    let deleted = false;
    let rowsArray = Array.from(list);
    for (let row of rowsArray) {
        const col = row.children[1];

        if (col.textContent == text) {
            row.remove()
            deleted = true;
        }
    }
    const result = document.getElementById('result');

    if (deleted) {
        result.textContent = "Deleted."
    } else {
        result.textContent = "Not found."
    }


}