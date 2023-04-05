import { html } from '../../node_modules/lit-html/lit-html.js'
import { getUserData } from '../../util.js'
import { get, del } from '../data/api.js'


const detailsTemplate = (data, isOwner, onDelete) => html `
     <section id="details">
          <div id="details-wrapper">
            <p id="details-title">Shoe Details</p>
            <div id="img-wrapper">
              <img src="${data.imageUrl}" alt="example1" />
            </div>
            <div id="info-wrapper">
              <p>Brand: <span id="details-brand">${data.brand}</span></p>
              <p>
                Model: <span id="details-model">${data.model}</span>
              </p>
              <p>Release date: <span id="details-release">${data.release}</span></p>
              <p>Designer: <span id="details-designer">${data.designer}</span></p>
              <p>Value: <span id="details-value">${data.value}</span></p>
            </div>
            ${isOwner  == true ? html `
            <div id="action-buttons">
              <a href="/edit/${data._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
            </div>
            ` : null}
          </div>
        </section>
`
export async function detailsView (ctx) {
    const id = ctx.params.id
    const data = await get(`/data/shoes/${id}`)
    const owner = getUserData()._id;
    let isOwner = false;
    

    if (data._ownerId == owner) {
        isOwner = true;
    }

    ctx.render(detailsTemplate(data, isOwner, onDelete))
    async function onDelete () {
        const coice = confirm('Are you sure you want to delete this?');
        if (coice) {
            await del(`/data/shoes/${id}`);
            ctx.page.redirect('/catalog')
        }
    }
    
    
}