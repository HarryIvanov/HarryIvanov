import { html } from '../../node_modules/lit-html/lit-html.js'
import {get} from '../data/api.js'

const fruitsTemplate = (data) => html `
    <h2>Fruits</h2>
        <section id="dashboard">
          ${data.length > 0 ? html`
          ${data.map(element => html `
          <div class="fruit">
            <img src="${element.imageUrl}" alt="example1" />
            <h3 class="title">${element.name}</h3>
            <p class="description">${element.description}</p>
            <a class="details-btn" href="/details/${element._id}">More Info</a>
          </div>
          `)}
          ` : html `
          <h2>No fruit info yet.</h2>
          `}
        </section>
`
export async function getFruits (ctx) {
    const data = await get('/data/fruits?sortBy=_createdOn%20desc');
    ctx.render(fruitsTemplate(data));
}