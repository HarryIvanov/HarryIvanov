import { showDetails } from "./details.js";


const section = document.getElementById('homeView');
section.querySelector('div.topic-title').addEventListener('click', showDetails)
const form = section.querySelector('form');
form.addEventListener('click', onSubmit);
section.querySelector('[name="cancel"]').addEventListener('click', clearForm)
section.remove()



export function showHome(ev) {
    ev?.preventDefault()
    document.getElementById('main').replaceChildren(section)
}

async function onSubmit (ev) {
    ev.preventDefault();
    const formData = new FormData(form);
    const title = formData.get("topicName");
    const username = formData.get("username");
    const content = formData.get("postText");

    try {
        const res = await fetch ('http://localhost:3030/jsonstore/collections/myboard/posts', {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                title,
                username,
                content
            })
        });
        if (!res.ok) {
            const error = await res.json();
            throw new Error (error.message)
        }
        form.reset();
        showHome();
    } catch (error) {
        alert(error.message)
    }

}

function clearForm() {
    form.reset()
}