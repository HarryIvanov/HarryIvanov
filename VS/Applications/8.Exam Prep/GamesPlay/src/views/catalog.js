import { html } from '../../node_modules/lit-html/lit-html.js'
import {get} from '../data/api.js'

const allGamesTemplate = (data) => html `
    <section id="catalog-page">
            <h1>All Games</h1>
            ${data.length > 0 ? html `
            ${data.map(game => html `
            <div class="allGames">
                <div class="allGames-info">
                    <img src="${game.imageUrl}">
                    <h6>${game.category}</h6>
                    <h2>${game.title}</h2>
                    <a href="/details/${game._id}" class="details-button">Details</a>
                </div>

            </div>
            `)}
            ` : html `
            <h3 class="no-articles">No articles yet</h3>
            `}
            </div>
        </section>
`
export async function gamesView(ctx) {
    const data = await get('/data/games?sortBy=_createdOn%20desc');
    ctx.render(allGamesTemplate(data));

}