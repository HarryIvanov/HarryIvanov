import { html } from '../../node_modules/lit-html/lit-html.js'
import { createSubmitHandler } from '../../util.js'
import { post } from '../data/api.js'

const createTemplate = (onCreate) => html `
    <section id="create">
          <div class="form">
            <h2>Add item</h2>
            <form @submit=${onCreate} class="create-form">
              <input
                type="text"
                name="brand"
                id="shoe-brand"
                placeholder="Brand"
              />
              <input
                type="text"
                name="model"
                id="shoe-model"
                placeholder="Model"
              />
              <input
                type="text"
                name="imageUrl"
                id="shoe-img"
                placeholder="Image url"
              />
              <input
                type="text"
                name="release"
                id="shoe-release"
                placeholder="Release date"
              />
              <input
                type="text"
                name="designer"
                id="shoe-designer"
                placeholder="Designer"
              />
              <input
                type="text"
                name="value"
                id="shoe-value"
                placeholder="Value"
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>
`
export async function createView (ctx) {
    ctx.render(createTemplate(createSubmitHandler(onCreate)));

    async function onCreate ({brand, model, imageUrl, release, designer, value}, form) {
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
        await post ('/data/shoes', product)
        form.reset();
        ctx.page.redirect('/catalog')

    }
}