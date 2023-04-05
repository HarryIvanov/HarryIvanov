import { html } from '../../node_modules/lit-html/lit-html.js'
import { getUserData } from '../../util.js'
import { get, del } from '../data/api.js'

const detailsTemplate = (data, isOwner, onDelete) => html `
    <section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src=${data.imageUrl} alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${data.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${data.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${data.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${data.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${data.sales}</span></p>
          </div>
            ${isOwner == true ? html `
            <div id="action-buttons">
            <a href="/edit/${data._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
          </div>` : null}
        </div>
      </section>
`
export async function detailsView (ctx) {
    const id = ctx.params.id
    let isOwner = false;
    const data = await get (`/data/albums/${id}`);
    const owner = getUserData();
    if (owner) {
        const od = owner._id
        if (od == data._ownerId) {
            isOwner = true;
        } 
    }
   console.log(isOwner);

    ctx.render(detailsTemplate(data, isOwner, onDelete));

    async function onDelete() {
        const coice = confirm('Are you sure you want to delete this?');
        if (coice) {
            await del(`/data/albums/${id}`);
            ctx.page.redirect('/catalog')
        }
        
    }

}