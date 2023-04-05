import { html } from '../../node_modules/lit-html/lit-html.js'
import { get } from '../data/api.js'

const catalogTemplate = (data) => html `
     <section id="dashboard">
          <h2>Collectibles</h2>
          <ul class="card-wrapper">
            ${data.length > 0 ? html `
            ${data.map(el => html `
            <li class="card">
              <img src="${el.imageUrl}" alt="travis" />
              <p>
                <strong>Brand: </strong><span class="brand">${el.brand}</span>
              </p>
              <p>
                <strong>Model: </strong
                ><span class="model">${el.model}</span>
              </p>
              <p><strong>Value:</strong><span class="value">${el.value}</span>$</p>
              <a class="details-btn" href="/details/${el._id}">Details</a>
            </li>
            `)}
            ` : html `<!-- Display an h2 if there are no posts -->
            <h2>There are no items added yet.</h2>`}
          </ul>
        </section>
`
export async function catalogView (ctx) {
    const data = await get('/data/shoes?sortBy=_createdOn%20desc')
    ctx.render(catalogTemplate(data))
}