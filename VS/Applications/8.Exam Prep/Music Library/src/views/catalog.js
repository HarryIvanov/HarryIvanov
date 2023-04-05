import { html } from '../../node_modules/lit-html/lit-html.js'
import { get } from '../data/api.js'


const catalogTemplate = (data) => html `
    <section id="dashboard">
        <h2>Albums</h2>
        <ul class="card-wrapper">
          ${data.length > 0 ? html `
          ${data.map(product => html `
          <li class="card">
            <img src="${product.imageUrl}" alt="travis" />
            <p>
              <strong>Singer/Band: </strong><span class="singer">${product.singer}</span>
            </p>
            <p>
              <strong>Album name: </strong><span class="album">${product.album}</span>
            </p>
            <p><strong>Sales:</strong><span class="sales">${product.sales}</span></p>
            <a class="details-btn" href="/details/${product._id}">Details</a>
          </li>
          `)}
          ` : html `
          <h2>There are no albums added yet.</h2>
          `}

        </ul>

        <!-- Display an h2 if there are no posts -->
       
      </section>
`
export async function catalogView (ctx) {
    const data = await get('/data/albums?sortBy=_createdOn%20desc');
    ctx.render(catalogTemplate(data))
}