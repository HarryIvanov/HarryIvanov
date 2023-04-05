import { html } from "../../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "../../util.js";
import {get, put} from '../data/api.js'

const editTemplate = (data, onEdit) => html `
    <section id="edit">
          <div class="form">
            <h2>Edit Offer</h2>
            <form @submit=${onEdit} class="edit-form">
              <input
                type="text"
                name="title"
                id="job-title"
                placeholder="Title"
                .value=${data.title}
              />
              <input
                type="text"
                name="imageUrl"
                id="job-logo"
                placeholder="Company logo url"
                .value=${data.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="job-category"
                placeholder="Category"
                .value=${data.category}
              />
              <textarea
                id="job-description"
                name="description"
                placeholder="Description"
                rows="4"
                cols="50"
                .value=${data.description}
              ></textarea>
              <textarea
                id="job-requirements"
                name="requirements"
                placeholder="Requirements"
                rows="4"
                cols="50"
                .value=${data.requirements}
              ></textarea>
              <input
                type="text"
                name="salary"
                id="job-salary"
                placeholder="Salary"
                .value=${data.salary}
              />

              <button type="submit">post</button>
            </form>
          </div>
        </section>
`
export async function editView (ctx) {
    const id = ctx.params.id;
    const data = await get(`/data/offers/${id}`);
    ctx.render(editTemplate(data,createSubmitHandler(onEdit)))
    
    async function onEdit({title, imageUrl, category, description, requirements, salary}, form) {
        if (title =="" || imageUrl == "" || category == "" || description == "" || requirements == "" || salary == "") {
            return alert ('All fields are required!')
        }
        const jobOffer = {
            title,
            imageUrl,
            category,
            description,
            requirements,
            salary

        }
        await put(`/data/offers/${id}`, jobOffer)
        form.reset();
        ctx.page.redirect('/catalog')
    }

}