import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../../util.js";
import {get, put} from '../data/api.js'

const editTemplate = (data, onEdit) => html `
    <section id="edit-meme">
            <form @submit=${onEdit} id="edit-form">
                <h1>Edit Meme</h1>
                <div class="container">
                    <label for="title">Title</label>
                    <input id="title" type="text" placeholder="Enter Title" name="title" .value=${data.title}>
                    <label for="description">Description</label>
                    <textarea id="description" placeholder="Enter Description" name="description" .value=${data.description}>
                        </textarea>
                    <label for="imageUrl">Image Url</label>
                    <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${data.imageUrl}>
                    <input type="submit" class="registerbtn button" value="Edit Meme">
                </div>
            </form>
        </section>
`
export async function editView (ctx) {
    const id = ctx.params.id;
    const data = await get(`/data/memes/${id}`);
    ctx.render(editTemplate(data, createSubmitHandler(onEdit)))

    async function onEdit ({title, description, imageUrl}, form) {
        if (title == "" || description == "" || imageUrl == "") {
            return alert('All fields are required!')
        }
        const newMeme = {
            title,
            description,
            imageUrl
        }
        await put(`/data/memes/${id}`, newMeme);
        form.reset();
        ctx.page.redirect(`/details/${id}`)
    }
    
}