import { html } from "../../node_modules/lit-html/lit-html.js";
import { getUserData } from "../../util.js";
import {get, del} from '../data/api.js'

const detailsTemplate = (data, isOwner, onDelete) => html `
    <section id="meme-details">
            <h1>Meme Title: ${data.title}

            </h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src=${data.imageUrl}>
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>
                       ${data.description}
                    </p>
                ${isOwner == true ? html `
                <a  class="button warning" href="/edit/${data._id}">Edit</a>
                    <button @click=${onDelete} class="button danger">Delete</button>
                ` : null}    
                </div>
            </div>
        </section>
`
export async function detailsView (ctx) {
    const id = ctx.params.id
    let isOwner = false;
    const userCheck = getUserData();
    const data = await get(`/data/memes/${id}`);
    if (userCheck) {
        if (userCheck._id == data._ownerId) {
            isOwner = true;
        }
    }
    ctx.render(detailsTemplate(data, isOwner, onDelete))
    async function onDelete() {
        let choice = confirm('Are you sure?');
        if (choice == true) {
            await del(`/data/memes/${id}`)
            ctx.page.redirect('/catalog')
        }
    }
}