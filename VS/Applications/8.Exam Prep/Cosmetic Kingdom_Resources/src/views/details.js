import {html} from '../../node_modules/lit-html/lit-html.js'
import { getUserData } from '../../util.js';
import { del, get } from '../data/api.js'

const detailsTemplate = (data, isOwner, onDelete) => html `
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src="${data.imageUrl}" alt="example1" />
            <p id="details-title">${data.name}</p>
            <p id="details-category">
              Category: <span id="categories">${data.category}</span>
            </p>
            <p id="details-price">
              Price: <span id="price-number">${data.price}</span>$</p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Bought: <span id="buys">0</span> times.</h4>
                <span
                  >${data.description}</span
                >
              </div>
              ${isOwner == true ? html `
              <div id="action-buttons">
              <a href="/edit/${data._id}" id="edit-btn">Edit</a>
              <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>

              <!--Bonus - Only for logged-in users ( not authors )-->
              <a href="javascript:void(0)" id="buy-btn">Buy</a>
            </div>
              ` : null}
            </div>
            </section>

`
export async function detailsView(ctx) {
    const id = ctx.params.id
    let isOwner = false;
    const data = await get (`/data/products/${id}`);
    console.log(data.name);
    const owner = getUserData();
    if (owner) {
        const od = owner._id
        if (od == data._ownerId) {
            isOwner = true;
        } 
    }
   

    ctx.render(detailsTemplate(data, isOwner, onDelete));

    async function onDelete() {
        const coice = confirm('Are you sure you want to delete this?');
        if (coice) {
            await del(`/data/products/${id}`);
            ctx.page.redirect('/catalog')
        }
        
    }
    
}
