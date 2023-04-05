import {html} from '../../node_modules/lit-html/lit-html.js'
import { get } from '../data/api.js'


const catalogTemplate = (data) => html `
    <h2>Products</h2>
    <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
            ${data.length > 0 ? html `
            
            ${data.map(product => html `
            <div class="product">
            <img src="${product.imageUrl}" alt="example1" />
            <p class="title">
            ${product.name}
            </p>
            <p><strong>Price:</strong><span class="price">${product.price}</span>$</p>
            <a class="details-btn" href="/details/${product._id}">Details</a>
          </div>
          </section>  
            ` )}
            ` : html `<h2>No products yet.</h2>
            </section>  `}
            
         
        
         <!-- Display an h2 if there are no posts -->
`

export async function catalogView (ctx) {
    const url = '/data/products?sortBy=_createdOn%20desc'
    
    const data = await get(url)
    ctx.render(catalogTemplate(data));
}