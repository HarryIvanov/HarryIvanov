import { html } from '../../node_modules/lit-html/lit-html.js'
import { createSubmitHandler } from '../../util.js'
import { get, put } from '../data/api.js'

const editTemplate = (data, onEdit) => html `
     <section id="edit">
          <div class="form">
            <h2>Edit item</h2>
            <form @submit=${onEdit} class="edit-form">
              <input
                type="text"
                name="brand"
                id="shoe-brand"
                placeholder="Brand"
                .value=${data.brand}
              />
              <input
                type="text"
                name="model"
                id="shoe-model"
                placeholder="Model"
                .value=${data.model}
              />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                placeholder="Image url"
                .value=${data.imageUrl}
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                placeholder="Release date"
                .value=${data.release}
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                placeholder="Designer"
                .value=${data.designer}
              />
              <input
                type="text"
                name="value"
                id="shoe-value"
                placeholder="Value"
                .value=${data.value}
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>
`
export async function editView (ctx) {
    const id = ctx.params.id;
    const data = await get(`/data/shoes/${id}`)
    ctx.render(editTemplate(data, createSubmitHandler(onEdit)))

    async function onEdit({brand, model, imageUrl, release, designer, value}, form) {
        if (brand == "" || model == "" || imageUrl == "" || release =="" || value == "" || designer == "") {
            return alert ('All fields are required!')
        }
        const product = {
            brand,
            model,
            imageUrl,
            release,
            designer,
            value
        }
        await put (`/data/shoes/${id}`, product)
        form.reset();
        ctx.page.redirect(`/details/${id}`)
    }
    
}