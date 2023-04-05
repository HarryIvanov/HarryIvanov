function attachEvents() {
    const personInput = document.getElementById('person');
    const personPhone = document.getElementById('phone');
    const phoneBook = document.getElementById('phonebook');

    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');

    const url = 'http://localhost:3030/jsonstore/phonebook'
    loadBtn.addEventListener('click', loadContacts);
    createBtn.addEventListener('click', createPhoneContact);
    
    async function createPhoneContact () {
        if (!personInput.value || !personPhone.value) return alert('No empty fields allowed!');
        await fetch(url, {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                person: personInput.value,
                phone: personPhone.value,
            }),
        });
        personInput.value = ""
        personPhone.value = ""
        loadBtn.click()
    }

    async function loadContacts () {
        const result = await fetch (url);
        const data = await result.json();

        Object.values(data).forEach(e => {
            const li = document.createElement('li');
            li.textContent = `${e['person']}: ${e['phone']}`;

            const delBtn = document.createElement('button');
            delBtn.setAttribute(`id`, e["_id"]);
            delBtn.textContent = "Delete";

            li.appendChild(delBtn);
            phoneBook.appendChild(li);
            delBtn.addEventListener('click', async (ev) => {
                const userId = ev.target.id
                const targetUrl = `${url}/${userId}`
                await fetch(targetUrl, {
                    method: "DELETE"
                })
                ev.target.parentNode.remove();
            })
        })
    }

}

attachEvents();