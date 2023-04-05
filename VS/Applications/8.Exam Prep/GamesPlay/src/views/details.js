import { html } from '../../node_modules/lit-html/lit-html.js'
import { getUserData } from '../../util.js';
import {del, get} from '../data/api.js'

const detailsTemplate = (data, isOwner, onDelete) => html `
    <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src="${data.imageUrl}" />
                    <h1>${data.title}</h1>
                    <span class="levels">MaxLevel: ${data.maxLevel}</span>
                    <p class="type">${data.category}</p>
                </div>

                <p class="text">
                    ${data.summary}
                </p>

                <!-- Bonus ( for Guests and Users ) -->
                <div class="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <!-- list all comments for current game (If any) -->
                        <li class="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li class="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    <!-- Display paragraph: If there are no games in the database -->
                    <p class="no-comment">No comments.</p>
                </div>

                ${isOwner == true ? html `
                <div class="buttons">
                    <a href="/edit/${data._id}" class="button">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
                </div>
            </div>
                ` : null}
                

            <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
            <article class="create-comment">
                <label>Add new comment:</label>
                <form class="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input class="btn submit" type="submit" value="Add Comment">
                </form>
            </article>

        </section>
`

export async function detailsView(ctx) {
    const id = ctx.params.id
    const data = await get(`/data/games/${id}`);
    const user = await getUserData();
    let isOwner = false;
    if (user) {
        const owner = user._id;
        const dataId = data._ownerId;
        
        if (owner == dataId) {
            isOwner = true;
        } 
    }
    ctx.render(detailsTemplate(data, isOwner,onDelete))

    async function onDelete() { 
        await del(`/data/games/${id}`)
        ctx.page.redirect('/')
    }
}