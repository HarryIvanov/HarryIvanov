import { html } from "../../node_modules/lit-html/lit-html.js";
import {get} from '../data/api.js'

const catalogTemplate = (data) => html `
    <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
				${data.length > 0 ? html `
                ${data.map(element => html `
                <div class="meme">
                    <div class="card">
                        <div class="info">
                            <p class="meme-title">${element.title}</p>
                            <img class="meme-image" alt="meme-img" src=${element.imageUrl}>
                        </div>
                        <div id="data-buttons">
                            <a class="button" href="/details/${element._id}">Details</a>
                        </div>
                    </div>
                </div>
                `)}
                ` : html `
                <p class="no-memes">No memes in database.</p>
                `}
			</div>
        </section>
`

export async function catalogView(ctx) {
    const data = await get('/data/memes?sortBy=_createdOn%20desc');
    ctx.render(catalogTemplate(data));


}