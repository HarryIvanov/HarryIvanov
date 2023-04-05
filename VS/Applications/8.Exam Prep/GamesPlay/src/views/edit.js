import { html } from '../../node_modules/lit-html/lit-html.js'
import { createSubmitHandler } from '../../util.js'
import {get, put} from '../data/api.js'

const editTemplate = (data, onEdit) => html `
     <section id="edit-page" class="auth">
            <form @submit=${onEdit} id="edit">
                <div class="container">

                    <h1>Edit Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" .value=${data.title}>

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" .value=${data.category}>

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${data.maxLevel}>

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" .value=${data.imageUrl}>

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary" .value=${data.summary}></textarea>
                    <input class="btn submit" type="submit" value="Edit Game">

                </div>
            </form>
        </section>
`
export async function editGame(ctx) {
    const id = ctx.params.id
    const data = await get(`/data/games/${id}`)

    ctx.render(editTemplate(data, createSubmitHandler(onEdit)));

    async function onEdit({title, category, maxLevel, imageUrl, summary},form) {
        if (title == "" || category == "" || maxLevel == "" || imageUrl == "" || summary == "") {
            return alert('All fields are required!')
        }
        const game = {
            title,
            category,
            maxLevel,
            imageUrl,
            summary
        }
        await put(`/data/games/${id}`, game)
        form.reset();
        ctx.page.redirect(`/details/${id}`)
    }
}