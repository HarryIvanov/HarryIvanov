import {html} from '../../node_modules/lit-html/lit-html.js'
import { get, put } from '../data/api.js';
import { createSubmitHandler } from "../../util.js";


const editTemplate = (data, onEdit) => html `
<section id="edit">
          <div class="form">
            <h2>Edit Product</h2>
            <form @submit=${onEdit} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Product Name"
                .value="${data.name}"
              />
              <input
                type="text"
                name="imageUrl"
                id="product-image"
                placeholder="Product Image"
                .value=${data.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="product-category"
                placeholder="Category"
                .value=${data.category}
              />
              <textarea
                id="product-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
                .value=${data.description}
              ></textarea>
              
              <input
                type="text"
                name="price"
                id="product-price"
                placeholder="Price"
                .value="${data.price}"
              />
              <button type="submit">post</button>
            </form>
          </div>
        </section>
`


export async function editView (ctx) {
    const id = ctx.params.id;
    const data = await get(`/data/products/${id}`)
    ctx.render(editTemplate(data, createSubmitHandler(onEdit)));
    

    async function onEdit ({name, imageUrl, category, description, price}, form) {
        if (name == "" || imageUrl == "" || category == "" || description == "" || price == "") {
            return alert('All fields are required')
        }
        const product = {
            name,
            imageUrl,
            category,
            description,
            price
        }
        await put(`/data/products/${id}`, product);

        form.reset();
        ctx.page.redirect('/catalog');
    }
    
}