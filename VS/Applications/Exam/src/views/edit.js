import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../../util.js";
import { get, put } from "../data/api.js";

const editTemplate = (data, onEdit) => html `
    <section id="edit">
          <div class="form">
            <h2>Edit Fruit</h2>
            <form @submit=${onEdit} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
                .value=${data.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image URL"
                .value=${data.imageUrl}
              />
              <textarea
                id="fruit-description"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
                .value=${data.description}
              ></textarea>
              <textarea
                id="fruit-nutrition"
                name="nutrition"
                placeholder="Nutrition"
                rows="10"
                cols="50"
                .value=${data.nutrition}
              ></textarea>
              <button type="submit">post</button>
            </form>
          </div>
        </section>
`
export async function editFruit(ctx) {
    const id = ctx.params.id
    const data = await get(`/data/fruits/${id}`)
    ctx.render(editTemplate(data, createSubmitHandler(onEdit)))

    async function onEdit({name, imageUrl, description, nutrition}, form) {
        if (name == "" || imageUrl == "" || description == "" || nutrition == "") {
            return alert('Please fill-in the required information!')
        }
        const fruit = {
            name,
            imageUrl,
            description,
            nutrition 
        }
        await put(`/data/fruits/${id}`, fruit)
        form.reset();
        ctx.page.redirect(`/details/${id}`)
    }
    
}
