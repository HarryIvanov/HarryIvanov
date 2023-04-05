import { html } from "../../node_modules/lit-html/lit-html.js";
import { get } from "../data/api.js";

const petCatalog = (data) => html`
    <section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
            ${
              data.length > 0
                ? html`
                ${data.map(element => html `
                
                      <div class="animals-board">
                        <article class="service-img">
                          <img
                            class="animal-image-cover"
                            src="${element.image}"
                        />
                        </article>
                        <h2 class="name">${element.name}</h2>
                        <h3 class="breed">${element.breed}</h3>
                        <div class="action">
                          <a class="btn" href="/details/${element._id}">Details</a>
                        </div>
                      </div>
                    </div>
                `)}
                  `
                : html`
                    <div>
                      <p class="no-pets">No pets in dashboard</p>
                    </div>
                  `
            }  
            </div>
        </section>
`;

export async function petCatalogView (ctx) {
    const data = await get('/data/pets?sortBy=_createdOn%20desc&distinct=name')
    ctx.render(petCatalog(data))
}
